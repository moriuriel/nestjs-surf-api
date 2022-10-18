/*
  Warnings:

  - You are about to drop the `championship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `championship` DROP FOREIGN KEY `championship_beach_id_fkey`;

-- DropTable
DROP TABLE `championship`;
