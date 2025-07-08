// separadoi para tratar so as funcoes do perfil do aluno

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const alunoId = params.get('id');
    const casaId = params.get('id');

    if (!alunoId) {
        alert("ID do aluno não encontrado na URL.");
        return;
    }

    fetch(`http://localhost:3000/alunos/${alunoId}`)
        .then(res => res.json())
        .then(aluno => {
            const container = document.getElementById('dados-aluno');

            if (container) {
                container.innerHTML = `
                    <h1>${aluno.nome} ${aluno.sobrenome}</h1>
                    <p><strong>Pontos</strong><br> ${aluno.pontos}</p>
                    <p><strong>Casa</strong><br> ${aluno.casa?.nome || 'Sem casa'}</p>
                    <p class="dt-nascimento"><strong>Data Nascimento</strong><br> ${aluno.dataNascimento }</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar aluno:', error);
            alert("Erro ao carregar os dados do aluno.");
        });


        
        const pontos='';
        const idAluno = new URLSearchParams(window.location.search).get('id');

        // Adicionar pontos
  document.querySelector('#btnAdicionar')?.addEventListener('click', () => {
    console.log('Botão clicado!');
    const pontos = parseInt(prompt('Quantos pontos adicionar?') || '0', 10);

    if (isNaN(pontos) || pontos <= 0) {
      alert('Por favor, insira um número válido de pontos.');
      return;
    }

    console.log(`Tentando adicionar ${pontos} pontos para o aluno ${alunoId}`);

    fetch(`http://localhost:3000/alunos/${alunoId}/adicionar-pontos`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pontos }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensagem);
        location.reload();
      })
      .catch(err => {
        console.error('Erro na requisição:', err);
        alert('Erro ao adicionar pontos.');
      });
  });

});
