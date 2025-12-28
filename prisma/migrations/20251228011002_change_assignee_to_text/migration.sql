/*
  Warnings:

  - You are about to drop the column `assignedToId` on the `AdminTask` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdminTask" DROP CONSTRAINT "AdminTask_assignedToId_fkey";

-- AlterTable
ALTER TABLE "AdminTask" DROP COLUMN "assignedToId",
ADD COLUMN     "assignedToName" TEXT,
ALTER COLUMN "type" SET DEFAULT 'custom',
ALTER COLUMN "permissionId" SET DEFAULT 'dashboard';
