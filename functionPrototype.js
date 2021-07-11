/* https://medium.com/@viniciusdacal/javascript-array-map-filter-e-reduce-tr%C3%AAs-m%C3%A9todos-para-manipula%C3%A7%C3%A3o-de-arrays-3fa9aebaf7fe */

// Array.map
const numeros = [1, 2, 3 , 4, 5, 6];
const duplicados = numeros.map(x => x * 2);
//console.log(duplicados);

// Array.filter
const produtos = [
    { id: 1, categoria: 'limpeza', name: 'Amaciante', valor: 5.00 },
    { id: 2, categoria: 'limpeza', name: 'Detergente', valor: 10.00 },
    { id: 3, categoria: 'alimento', name: 'ovo', valor: 15.00 },
    { id: 4, categoria: 'alimento', name: 'alface', valor: 20.00 },
  ];

const isAlimento = produtos.filter(p => p.categoria == 'alimento');
//console.log(isAlimento);

const valor = produtos.filter(produto => produto.categoria == 'limpeza')
    .reduce((x, produto) => x + produto.valor, 0);
console.log(valor);

const retorno = produtos.filter(produto => produto.categoria == 'limpeza')
    .map(produto => produto.valor * 2)
    .reduce((x, y) => x + y, 5);
//console.log(retorno);