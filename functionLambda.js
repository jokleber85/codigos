console.log(`Função Lambda`);

var funcao1 = (param) => {
    //alert(param)
    console.log(param);
}

function funcao2(){
    funcao1("Teste");
}

funcao2();