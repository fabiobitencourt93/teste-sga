function atualizarRelogio() {
    const agora = new Date(); // Obtém a data e hora atual
    
    // Formata a hora, minutos e segundos para ter sempre 2 dígitos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    // Formata a data (dia/mês/ano)
    
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    
    // Exibe no HTML
    document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;
}

// Executa a função imediatamente ao carregar e depois a cada 1 segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

document.getElementById("logout").addEventListener("click", function () {
    window.location.href = "../tela_login/index.html";
});

