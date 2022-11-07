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

function MaiorSalario() {
    let maiorSal = 0
    salarios.forEach(x => {
        if (x > maiorSal) {
            maiorSal = x;
        }
    })

    console.log("O maior salario é R$" + maiorSal);
}

function PorcentagemPessoas() {
    let supSalarios = salarios.filter(x => x <= 1500)
    let porcentagem = (supSalarios.length * 100) / salarios.length
    console.log("A porcentagem de habitantes com salarios até R$1500 é de %" + porcentagem)
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

PorcentagemPessoas();