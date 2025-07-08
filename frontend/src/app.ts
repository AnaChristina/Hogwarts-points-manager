// src/app.ts
window.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('lista-alunos') as HTMLTableSectionElement | null;
    const inputBusca = document.querySelector('.pesquisa-aluno') as HTMLInputElement;

    if (!tabela || !inputBusca) return;

    let todosAlunos: any[] = [];

    fetch('http://localhost:3000/alunos')
        .then(response => response.json())
        .then(alunos => {
            todosAlunos = alunos;
            mostrarAlunos(todosAlunos);
        })
        .catch(error => {
            console.error('Erro ao buscar alunos:', error);
        });
        

    function mostrarAlunos(alunosFiltrados: any[]) {
        tabela!.innerHTML = ''; 
        alunosFiltrados.forEach((aluno: any) => {
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            tdNome.textContent = `${aluno.nome} ${aluno.sobrenome}`;

            const tdPontos = document.createElement('td');
            tdPontos.textContent = aluno.pontos?.toString() || '0';

            const tdCasa = document.createElement('td');
            tdCasa.textContent = aluno.casa?.nome || 'Sem casa';

            const btnPerfil = document.createElement('button');
            btnPerfil.textContent = 'Perfil'
            btnPerfil.addEventListener('click', () => {
            window.location.href = `perfilAluno.html?id=${aluno.id}`;
            })

            tr.appendChild(tdNome);
            tr.appendChild(tdPontos);
            tr.appendChild(tdCasa);
            tr.appendChild(btnPerfil);

            tabela!.appendChild(tr);
        });
    }

    inputBusca.addEventListener('input', () => {
        const termo = inputBusca.value.toLowerCase();
        const filtrados = todosAlunos.filter(aluno =>
            `${aluno.nome} ${aluno.sobrenome}`.toLowerCase().includes(termo)
        );
        mostrarAlunos(filtrados);
    });

    
});

