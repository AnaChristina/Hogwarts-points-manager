window.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search);
    const casaId = params.get('id');

    let todasCasas: any[] = [];

    fetch('http://localhost:3000/casas')
        .then(response => response.json())
        .then(casas => {
            todasCasas = casas;
            mostrarCasa(todasCasas);
        })
        .catch(error => {
            console.error('Erro ao buscar casas:', error);
        });
        

    function mostrarCasa(alunosFiltrados: any[]) {
        alunosFiltrados.forEach((casa: any) => {

            const btnPerfil = document.createElement('button');
            btnPerfil.textContent = 'Perfil'
            btnPerfil.addEventListener('click', () => {
            window.location.href = `perfilCasa.html?id=${casa.id}`;
            })
        });
    }

    if (!casaId) {
    alert("ID da casa não encontrado.");
    return;
}

const idCasa = params.get('id');
fetch(`http://localhost:3000/casas/${casaId}`)
        .then(res => res.json())
        .then(casa => {
            const container = document.getElementById('dados-casa');
            if (container) {
                container.innerHTML = `
                    <h2>${casa.nome}</h2>
                    <p>Descrição: ${casa.descricao ?? "Sem descrição"}</p>
                    <p>Pontos: ${casa.pontos ?? 0}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar casa:', error);
            alert("Erro ao carregar os dados da casa.");
    });

});

