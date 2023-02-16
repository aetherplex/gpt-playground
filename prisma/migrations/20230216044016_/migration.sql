/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Preset` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Preset_userId_name_key" ON "Preset"("userId", "name");
