// // prisma/seed.ts
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//     await prisma.casa.createMany({
//     data: [
//         {
//             nome: 'Grifinória',
//             descricao:
//                 'Grifinória valoriza a coragem, bravura, determinação e força de espírito. Fundada por Godrico Gryffindor.',
//             pontos: 0,
//             brasaoUrl: '/imagens/brasoes/grifinoria.png', // Exemplo de imagem
//         },
//         {
//             nome: 'Sonserina',
//             descricao:
//                 'Sonserina valoriza a ambição, astúcia, liderança e determinação. Fundada por Salazar Slytherin.',
//             pontos: 0,
//             brasaoUrl: '/imagens/brasoes/grifinoria.png',
//         },
//         {
//             nome: 'Corvinal',
//             descricao:
//                 'Corvinal valoriza a inteligência, sabedoria, criatividade e aprendizado. Fundada por Rowena Ravenclaw.',
//             pontos: 0,
//             brasaoUrl: '/imagens/brasoes/grifinoria.png',
//         },
//         {
//             nome: 'Lufa-Lufa',
//             descricao:
//                 'Lufa-Lufa valoriza a lealdade, justiça, paciência e trabalho árduo. Fundada por Helga Hufflepuff.',
//                 pontos: 0,
//                 brasaoUrl: '/imagens/brasoes/grifinoria.png',
//         },
//     ],
//     skipDuplicates: true, // evita duplicatas caso o seed seja rodado mais de uma vez
// });
// }

// main()
//     .catch((e) => {
//     console.error(e);
//     process.exit(1);
// })
// .finally(() => prisma.$disconnect());
