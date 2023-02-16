/*
  Warnings:

  - Added the required column `presence_penalty` to the `Preset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preset" ADD COLUMN     "presence_penalty" DOUBLE PRECISION NOT NULL;
