let salarios = [];
let numDeFilhos = [];

function PegaInformacoes() {
    salarios.push(parseInt(prompt("Salario:")))
    numDeFilhos.push(parseInt(prompt("Number de filhos:")));
};

function MediaDeSalarios() {
    let somaSalarios = 0
    salarios.forEach(numero => {
        somaSalarios = somaSalarios + numero;
    });
    let mediaSalarios = somaSalarios / salarios.length;
    console.log("Media de salarios dos habitantes: R$" + mediaSalarios.toFixed(2));
};

function MediaDeFilhos() {
    let somaQtdFilhos = 0
    numDeFilhos.forEach(numero => {
        somaQtdFilhos = somaQtdFilhos + numero;
    });
    let mediaFilhos = somaQtdFilhos / numDeFilhos.length;
    console.log("Media de filhos: " + Math.round(mediaFilhos));
}

// while para testes
let repeat = true;
while (repeat) {
    PegaInformacoes();
    let continuar = prompt("");
    if (continuar == "n") {
        repeat = false;
    }
};

MediaDeFilhos();