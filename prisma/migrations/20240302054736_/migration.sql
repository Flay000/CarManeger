
-- CreateTable
CREATE TABLE "Cars" (
    "id" SERIAL NOT NULL,
    "dono" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);
