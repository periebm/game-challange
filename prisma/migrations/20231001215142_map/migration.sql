/*
  Warnings:

  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_participantId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "homeTeamScore" SET DEFAULT 0,
ALTER COLUMN "awayTeamScore" SET DEFAULT 0,
ALTER COLUMN "isFinished" SET DEFAULT false;

-- DropTable
DROP TABLE "Participant";

-- CreateTable
CREATE TABLE "participants" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
