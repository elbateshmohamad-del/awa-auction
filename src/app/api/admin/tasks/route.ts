import { NextRequest, NextResponse } from 'next/server';
import { getAuthFromCookie } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET: ログインユーザーの権限に応じたタスク一覧を取得
export async function GET() {
    try {
        const auth = await getAuthFromCookie();

        if (!auth) {
            return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { id: auth.userId },
        });

        if (!user || (user.role !== 'ADMIN' && user.role !== 'STAFF')) {
            return NextResponse.json({ error: '権限がありません' }, { status: 403 });
        }

        // ADMINは全タスク、STAFFは権限に応じたタスクのみ
        let tasks;
        if (user.role === 'ADMIN') {
            tasks = await prisma.adminTask.findMany({
                where: { completed: false },
                orderBy: { createdAt: 'desc' },
            });
        } else {
            const permissions = JSON.parse(user.permissions || '[]') as string[];
            tasks = await prisma.adminTask.findMany({
                where: {
                    completed: false,
                    permissionId: { in: permissions },
                },
                orderBy: { createdAt: 'desc' },
            });
        }

        return NextResponse.json({ tasks });
    } catch (error) {
        console.error('タスク取得エラー:', error);
        return NextResponse.json({ error: 'タスクの取得に失敗しました' }, { status: 500 });
    }
}

// PATCH: タスクを完了済みにマーク
export async function PATCH(request: NextRequest) {
    try {
        const auth = await getAuthFromCookie();

        if (!auth) {
            return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { id: auth.userId },
        });

        if (!user || (user.role !== 'ADMIN' && user.role !== 'STAFF')) {
            return NextResponse.json({ error: '権限がありません' }, { status: 403 });
        }

        const { taskId, completed } = await request.json();

        if (!taskId) {
            return NextResponse.json({ error: 'タスクIDが必要です' }, { status: 400 });
        }

        const task = await prisma.adminTask.update({
            where: { id: taskId },
            data: { completed: completed ?? true },
        });

        return NextResponse.json({ task });
    } catch (error) {
        console.error('タスク更新エラー:', error);
        return NextResponse.json({ error: 'タスクの更新に失敗しました' }, { status: 500 });
    }
}

// POST: 新しいタスクを作成
export async function POST(request: NextRequest) {
    try {
        const auth = await getAuthFromCookie();

        if (!auth) {
            return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { id: auth.userId },
        });

        if (!user || user.role !== 'ADMIN') {
            return NextResponse.json({ error: '管理者権限が必要です' }, { status: 403 });
        }

        const { title, description, permissionId, type, dueDate, assignedToName } = await request.json();

        if (!title?.trim()) {
            return NextResponse.json({ error: 'タイトルは必須です' }, { status: 400 });
        }

        const task = await prisma.adminTask.create({
            data: {
                type: type || 'custom',
                title: title.trim(),
                description: description?.trim() || null,
                permissionId: permissionId || 'dashboard',
                dueDate: dueDate ? new Date(dueDate) : null,
                assignedToName: assignedToName?.trim() || null,
            },
        });

        return NextResponse.json({ task }, { status: 201 });
    } catch (error) {
        console.error('タスク作成エラー:', error);
        return NextResponse.json({ error: 'タスクの作成に失敗しました' }, { status: 500 });
    }
}
