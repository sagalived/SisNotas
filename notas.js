function nota(){
    var nota = document.querySelector('#nota').value;
    if (nota < 38){
        document.querySelector('#resultado').innerHTML ="Aluno Reprovado á nota é:" + nota
    }
    else if(nota % 5 < 2){
        let notaArredondadaBaixo = (nota % 5) >= 2.5 ? parseInt(nota / 5) * 5 + 5 : parseInt(nota / 5) * 5
        document.querySelector('#resultado').innerHTML ="Aluno aprovado, nota:" + notaArredondadaBaixo
    }
    else{
        let notaArredondadaCima = Math.ceil(nota/5)*5;
        document.querySelector('#resultado').innerHTML = 'Aluno aprovado, nota:' + notaArredondadaCima
    }
}