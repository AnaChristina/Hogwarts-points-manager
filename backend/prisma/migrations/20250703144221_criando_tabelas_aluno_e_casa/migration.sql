-- CreateTable
CREATE TABLE "Casa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "pontos" INTEGER DEFAULT 0,

    CONSTRAINT "Casa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "casa_id" INTEGER NOT NULL,
    "pontos" INTEGER DEFAULT 0,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_casa_id_fkey" FOREIGN KEY ("casa_id") REFERENCES "Casa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
