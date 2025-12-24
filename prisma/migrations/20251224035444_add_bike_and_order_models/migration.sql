-- CreateTable
CREATE TABLE "Bike" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bdsId" TEXT NOT NULL,
    "lane" TEXT,
    "auctionNumber" TEXT,
    "auctionDate" TEXT,
    "name" TEXT NOT NULL,
    "maker" TEXT,
    "makerConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "region" TEXT,
    "inspectionStatus" TEXT,
    "listingType" TEXT,
    "vin" TEXT,
    "engineNumber" TEXT,
    "mileage" TEXT,
    "documentMileage" TEXT,
    "pastMileage" TEXT,
    "color" TEXT,
    "displacement" TEXT,
    "firstRegistration" TEXT,
    "inspection" TEXT,
    "hasParts" TEXT,
    "registrationNumber" TEXT,
    "startPrice" INTEGER NOT NULL DEFAULT 0,
    "currentPrice" INTEGER NOT NULL DEFAULT 0,
    "result" TEXT,
    "overallGrade" REAL,
    "engineGrade" REAL,
    "frontGrade" REAL,
    "exteriorGrade" REAL,
    "rearGrade" REAL,
    "electricGrade" REAL,
    "frameGrade" REAL,
    "awaGrade" TEXT DEFAULT 'D',
    "inspectionDetails" TEXT DEFAULT '{}',
    "awaReport" TEXT,
    "sellerDeclaration" TEXT,
    "images" TEXT DEFAULT '[]',
    "videoUrls" TEXT DEFAULT '[]',
    "remarks" TEXT DEFAULT '[]',
    "status" TEXT NOT NULL DEFAULT 'active',
    "importedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "exchangeRate" REAL NOT NULL DEFAULT 1.0,
    "paymentMethod" TEXT NOT NULL DEFAULT 'BANK',
    "status" TEXT NOT NULL DEFAULT 'PENDING_PAYMENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bid_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "permissions" TEXT DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "preferredCurrency" TEXT NOT NULL DEFAULT 'USD',
    "memberType" TEXT NOT NULL DEFAULT 'INDIVIDUAL',
    "phoneNumber" TEXT,
    "address" TEXT,
    "corporateName" TEXT,
    "corporateRegNum" TEXT,
    "representative" TEXT,
    "kycStatus" TEXT NOT NULL DEFAULT 'NONE'
);
INSERT INTO "new_User" ("address", "corporateName", "corporateRegNum", "createdAt", "email", "id", "kycStatus", "memberType", "name", "passwordHash", "phoneNumber", "representative", "role", "updatedAt") SELECT "address", "corporateName", "corporateRegNum", "createdAt", "email", "id", "kycStatus", "memberType", "name", "passwordHash", "phoneNumber", "representative", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Bike_bdsId_key" ON "Bike"("bdsId");
