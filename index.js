const id = document.getElementById('registro_id')
const senha = document.getElementById('senha_id')
const botao = document.getElementById('entrar_btn')

let tela_destino = "https://fabiobitencourt93.github.io/Web_SGA/index.html"

const docente = document.getElementById('docente_btn')
    docente.addEventListener("click", ()=>{
        tela_destino = "https://fabiobitencourt93.github.io/Web_SGA/docente.html"

    })

    const coord = document.getElementById('coord_btn')
    coord.addEventListener("click", ()=>{
        tela_destino = "https://fabiobitencourt93.github.io/Web_SGA/coordenador.html"
    })

    const secretaria = document.getElementById('secretaria_btn')
    secretaria.addEventListener("click", ()=>{
        tela_destino = "https://fabiobitencourt93.github.io/Web_SGA/secretaria.html"
    })


function validaUsuario(){
    if(id.value === "" || senha.value === ""){
        alert("Credenciais Inválidas, tente novamente.")
    }
    else{
            if(tela_destino === "https://fabiobitencourt93.github.io/Web_SGA/index.html"){
            alert("Selecione um perfil")
            return
        }
        else{
            window.location.href = tela_destino
        }
        
    }
    id.value = ""
    senha.value = ""
}

botao.addEventListener("click", validaUsuario)


const secretariaBtn = document.getElementById("secretaria_btn");
const coordBtn = document.getElementById("coord_btn");
const docenteBtn = document.getElementById("docente_btn");

let perfilSelecionado = "";

function selecionarPerfil(botao, perfil) {

    // Remove seleção anterior
    secretariaBtn.classList.remove("perfil-ativo");
    coordBtn.classList.remove("perfil-ativo");
    docenteBtn.classList.remove("perfil-ativo");

    // Adiciona ao botão clicado
    botao.classList.add("perfil-ativo");

    perfilSelecionado = perfil;

    console.log("Perfil selecionado:", perfilSelecionado);
}

secretariaBtn.addEventListener("click", () => {
    selecionarPerfil(secretariaBtn, "secretaria");
});

coordBtn.addEventListener("click", () => {
    selecionarPerfil(coordBtn, "coordenador");
});

docenteBtn.addEventListener("click", () => {
    selecionarPerfil(docenteBtn, "docente");
});