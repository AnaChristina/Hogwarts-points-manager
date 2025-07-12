document.getElementById('formLogin')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    try {
        const resposta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            localStorage.setItem('token', dados.token);
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html';
        } else {
            alert(dados.mensagem || 'Erro ao fazer login');
        }
    } catch (erro) {
        console.error('Erro no login:', erro);
        alert('Erro na conexão com o servidor');
    }
});
