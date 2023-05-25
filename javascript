// Dados de exemplo (poderiam ser obtidos de um banco de dados)
const vendas = [
  { produto: 'Camisa', quantidade: 10, precoUnitario: 25 },
  { produto: 'Calça', quantidade: 5, precoUnitario: 50 },
  { produto: 'Sapato', quantidade: 2, precoUnitario: 100 }
];

// Função para calcular o valor total de vendas
function calcularTotalVendas(vendas) {
  let total = 0;
  for (let i = 0; i < vendas.length; i++) {
    total += vendas[i].quantidade * vendas[i].precoUnitario;
  }
  return total;
}

// Função para gerar o relatório de vendas
function gerarRelatorioVendas(vendas) {
  console.log('Relatório de Vendas');
  console.log('-------------------');
  console.log('Produto\t\tQuantidade\tPreço Unitário\tTotal');
  console.log('------------------------------------------------');

  for (let i = 0; i < vendas.length; i++) {
    const { produto, quantidade, precoUnitario } = vendas[i];
    const total = quantidade * precoUnitario;

    console.log(`${produto}\t\t${quantidade}\t\t${precoUnitario}\t\t${total}`);
  }

  const totalVendas = calcularTotalVendas(vendas);
  console.log('------------------------------------------------');
  console.log(`Total de Vendas: R$ ${totalVendas}`);
}

// Executa a função para gerar o relatório
gerarRelatorioVendas(vendas);
