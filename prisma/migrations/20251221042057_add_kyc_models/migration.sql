-- CreateTable
CREATE TABLE "SnsSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "postUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "initialViews" INTEGER DEFAULT 0,
    "initialLikes" INTEGER DEFAULT 0,
    "verifiedViews" INTEGER DEFAULT 0,
    "verifiedLikes" INTEGER DEFAULT 0,
    "verifiedShares" INTEGER DEFAULT 0,
    "rewardGranted" TEXT,
    "metricsJson" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "memberType" TEXT NOT NULL DEFAULT 'INDIVIDUAL',
    "phoneNumber" TEXT,
    "address" TEXT,
    "corporateName" TEXT,
    "corporateRegNum" TEXT,
    "representative" TEXT,
    "kycStatus" TEXT NOT NULL DEFAULT 'NONE'
);

-- CreateTable
CREATE TABLE "KycDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "rejectionReason" TEXT,
    "reviewedBy" TEXT,
    "reviewedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "KycDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
