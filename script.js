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
    console.log("A porcentagem de habitantes com salarios até R$1500 é de %" + porcentagem.toFixed(2))
}

function Opcoes() {
    let opc = prompt(" 1 - Adicionar Informações | 2 - Media De Salario | 3 - Media de Filhos | 4 - Maior Salario | 5 - Porcentagem de Pessoas com Salario ate R$1500 | 6 - Fechar.");

    if (opc == 1) {
        PegaInformacoes();
    } else if (opc == 2) {
        MediaDeSalarios();
    } else if (opc == 3) {
        MediaDeFilhos();
    } else if (opc == 4) {
        MaiorSalario();
    } else if (opc == 5) {
        PorcentagemPessoas();
    } else if (opc == 6) {
        repeat = false
    }
}

let repeat = true;
while (repeat) {
    Opcoes();
};