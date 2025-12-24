# デプロイメント考慮事項

## 重要: JSONファイルストレージの制限

現在のシステムでは、以下のデータがJSONファイルに保存されています：

| ファイル | 内容 | 場所 |
|----------|------|------|
| `data/bikes.json` | バイクデータ | ファイルシステム |
| `data/containers.json` | コンテナ/配送スケジュール | ファイルシステム |
| `data/bds-settings.json` | BDSログイン情報 | ファイルシステム |

### ⚠️ Vercel/サーバーレス環境での問題

**Vercelなどのサーバーレス環境では、ファイルシステムへの書き込みができません。**

各リクエストは独立したコンテナで処理され、書き込まれたファイルは次のリクエストで消えます。

---

## 解決策

### Option 1: 読み取り専用運用（推奨・短期）

JSONファイルを**ビルド時に含める**形で運用：

1. `data/bikes.json` をGitにコミット
2. バイク追加はローカルで行い、再デプロイ
3. BDSインポートは開発環境のみで実行

**メリット**: 最小限の変更で動作  
**デメリット**: リアルタイム更新不可

---

### Option 2: SQLite → PostgreSQL移行（推奨・中期）

Vercel PostgresまたはSupabaseに移行：

```bash
# 1. Vercel Postgres作成
vercel postgres add

# 2. schema.prismaを編集
datasource db {
  provider = "postgresql"  # sqlite → postgresql
  url      = env("DATABASE_URL")
}

# 3. Bikeモデルを追加
model Bike {
  id                String   @id @default(uuid())
  bdsId             String   @unique
  name              String
  maker             String
  startPrice        Int
  overallGrade      Float
  // ... 他のフィールド
  status            String   @default("active")
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

# 4. マイグレーション実行
npx prisma migrate dev --name add_bike_model
```

---

### Option 3: 外部ストレージ（Supabase Storage）

BDS画像やKYC書類の保存：

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

// 画像アップロード
const { data, error } = await supabase.storage
  .from('kyc-documents')
  .upload(`${userId}/${filename}`, file);
```

---

## 環境変数チェックリスト

本番デプロイ前に設定が必要：

```env
# 必須
DATABASE_URL=postgresql://...  # Vercel Postgres/Supabase
JWT_SECRET=your-secret-key-here

# オプション（機能が必要な場合）
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=eyJ...

# BDSスクレイピング用（サーバー側のみ）
BDS_USERNAME=xxx
BDS_PASSWORD=xxx
```

---

## 現状のまま動作させる場合

開発サーバー（localhost）では問題なく動作します。

Vercelにデプロイする場合：
1. `data/bikes.json` を事前に作成し、Gitにコミット
2. 管理画面からのバイク追加・編集は動作しません
3. 入札データはクライアントのlocalStorageに保存されます

---

## 推奨移行スケジュール

| フェーズ | 期間 | 内容 |
|---------|------|------|
| **Phase 1** | 今すぐ | 読み取り専用でデプロイ |
| **Phase 2** | 1週間 | PostgreSQLにBikeモデル移行 |
| **Phase 3** | 2週間 | 入札履歴をDB保存 |
| **Phase 4** | 3週間 | KYC画像をSupabase Storage移行 |
