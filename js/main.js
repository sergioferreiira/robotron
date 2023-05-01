const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatisticas]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})


function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }
    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    console.log(pecas[peca])

    estatistica.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    })
}

const coresRobo = document.querySelectorAll("[data-cores]")
const robo = document.querySelector("[data-robo]")

const valorDasCores = {
    "amarelo": {
        src: "../img/Robotron 2000 - Amarelo/robotron.png"
    },
    "azul": {
        src: "../img/Robotron 2000 - azul/robotron.png"
    },
    "preto": {
        src: "../img/Robotron 2000 - preto/robotron.png"
    },
    "rosa": {
        src: "../img/Robotron 2000 - rosa/robotron.png"
    }
}

coresRobo.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        console.log(elemento.dataset.cores)
        if (elemento.dataset.cores == 'amarelo') {
            robo.src = "../img/Robotron 2000 - Amarelo/robotron.png"
        }
        if (elemento.dataset.cores == 'azul') {
            robo.src = "../img/Robotron 2000 - Azul/robotron.png"
        }
        if (elemento.dataset.cores == 'preto') {
            robo.src = "../img/Robotron 2000 - Preto/robotron.png"
        }
        if (elemento.dataset.cores == 'rosa') {
            robo.src = "../img/Robotron 2000 - Rosa/robotron.png"
        }
    })
})