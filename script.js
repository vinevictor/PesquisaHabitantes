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
    let mediaDeSalarios = somaSalarios / salarios.length;
    console.log("Media de salarios dos habitantes: " + mediaDeSalarios)
};

// while para testes
let repeat = true;
while (repeat) {
    PegaInformacoes();
    let continuar = prompt("");
    if (continuar == "n") {
        repeat = false;
    }
};

