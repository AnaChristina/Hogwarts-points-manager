// src/app.ts
window.addEventListener('DOMContentLoaded', () => {
const lista = document.getElementById('lista-alunos');

  if (!lista) return; // se a lista não existe nessa página, não faz nada

fetch('http://localhost:3000/alunos')
    .then(response => response.json())
    .then(alunos => {
        alunos.forEach((aluno: any) => {
        const li = document.createElement('li');
        li.textContent = aluno.nome; 
        lista.appendChild(li);
    });
    })
    .catch(error => {
        console.error('Erro ao buscar alunos:', error);
    });
});
