/*
  Warnings:

  - Added the required column `prompt` to the `Preset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preset" ADD COLUMN     "prompt" TEXT NOT NULL;
