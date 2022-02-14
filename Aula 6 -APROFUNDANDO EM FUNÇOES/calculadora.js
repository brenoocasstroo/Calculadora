function calculadora() {
    const operacao = Number (prompt('Escolha uma operação:\n 1 - soma (+)\n 2- subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'))

    if(!operacao || operacao >= 7) {
        alert('erro - operacao inválida!');
        calculadora();
    }  else { 
        let n1 = Number(prompt('insira o primeiro valor:'));
        let n2 = Number(prompt('insira o primeiro valor:'));
        let resultado;

        if (!n1 || n2) {
            alert('Erro - Parametro invalido')
            calculadora();
        } else 
        { 
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subitracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoreal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaointeira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
        
            function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            
                if (opcao == 1) {
                 calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção valida!')
                novaOperacao();
                }  
               
            } 
        }
    
    
        if (operacao == 1) { 
            soma();
        } else if (operacao == 2) {
            subitracao();
        } else if (operacao == 3) {
            multiplicacao ();
        } else if (operacao == 4) { 
            divisaoreal ();
        } else if (operacao == 5) {
            divisaointeira ();
        } else if (operacao == 6) {
            potenciacao();
        } 
    }


}

calculadora();
