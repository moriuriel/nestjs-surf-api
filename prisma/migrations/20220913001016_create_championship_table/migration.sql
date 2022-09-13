-- AlterTable
ALTER TABLE `beach` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `championship` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `event_date` DATETIME(3) NOT NULL,
    `beach_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `championship_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `championship` ADD CONSTRAINT `championship_beach_id_fkey` FOREIGN KEY (`beach_id`) REFERENCES `beach`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
