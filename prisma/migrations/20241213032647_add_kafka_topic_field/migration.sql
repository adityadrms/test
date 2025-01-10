/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `wells` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `topic` to the `wells` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wells" ADD COLUMN     "topic" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "wells_topic_key" ON "wells"("topic");
