-- CreateTable
CREATE TABLE "Zone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stockLimit" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "departureAddress" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    CONSTRAINT "Package_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
