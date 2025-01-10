/*
  Warnings:

  - Added the required column `logicalOperator` to the `ruleconditions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LogicalOperator" AS ENUM ('AND', 'OR');

-- AlterTable
ALTER TABLE "ruleconditions" ADD COLUMN     "logicalOperator" "LogicalOperator" NOT NULL;
