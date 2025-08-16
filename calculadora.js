let tipoDesconto = "TOTAL";
let pagamento = 7500.00;
let desconto = 0;

switch (tipoDesconto) {
    case "IR":
        desconto = pagamento * 0.05;
        break;
    case "INSS":
        desconto = pagamento * 0.08;
        break;
    case "FGTS":
        desconto = pagamento * 0.07;
        break;
    case "TOTAL":
        desconto = (pagamento * 0.05) + (pagamento * 0.08) + (pagamento * 0.07);
        break;
    default:
        console.log("Tipo de desconto inválido");
}

let salarioLiquido = pagamento - desconto;
console.log("Salário com desconto aplicado: R$" + salarioLiquido.toFixed(2));

