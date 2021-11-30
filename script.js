var n1=[];
var n2=[];
var valor1=0;
var valor2=0;
var valor2Auxiliar=0;
var operando;
var operador = false;
var resultado;
var historico = false;
document.getElementById("valor1").innerHTML = "0";

//Botões Numéricos

function botao0(){
    valor = 0;
    incremento (valor);
}
function botao1(){
    valor = 1;
    incremento (valor);
}
function botao2(){
    valor = 2;
    incremento (valor);
}
function botao3(){
    valor = 3;
    incremento (valor);
}
function botao4(){
    valor = 4;
    incremento (valor);
}
function botao5(){
    valor = 5;
    incremento (valor);
}
function botao6(){
    valor = 6;
    incremento (valor);
}
function botao7(){
    valor = 7;
    incremento (valor);
}
function botao8(){
    valor = 8;
    incremento (valor);
}
function botao9(){
    valor = 9;
    incremento (valor);
}

//Botões de funções básicas

function botaoSoma(){
    operando = "+";
    operacao();
}
function botaoSub(){
    operando = "-";
    operacao();
}
function botaoMult(){
    operando = "x";
    operacao();
}
function botaoDiv(){
    operando = "/";
    operacao();
}

//Botões de funções avançadas

function botaoInv(){
    if (operador == false){
        if (n1.includes("-") == true){
            n1.shift();
        }
        else{
        n1.unshift("-");
        }
        valor1 = Number(n1.join(""));
        document.getElementById("valor1").innerHTML = + valor1;
    }
    else{
        if (n2.length==0){
            n2 = n1;
            n2.unshift("-");
            valor2 = Number(n2.join(""));
            document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " (" + valor2 + ")";
        }
        else{
            if (n2.includes("-") == true){
                n2.shift();
                valor2 = Number(n2.join(""));
                document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " " + valor2;
            }
            else{
                n2.unshift("-");
                valor2 = Number(n2.join(""));
                document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " (" + valor2 + ")";
            }
        }  
    }
}

function botaoPont(){
    valor =".";
    if (operador == false){
        if (n1.includes(".")==false){
            incremento();
        }
    }
    else{
        if (n2.includes(".")==false){
            incremento();
        }
    }
}

function botaoApa(){
    if (operador == false){
        n1.pop(valor);
        altValor1();
    }
    else{
        n2.pop(valor);
        altValor2();
    }
}

function botaoC(){
    limpar()
}

function botaoCE(){
    limparParcial();
}

function botaoRes(){
        if (valor2 == 0){
            if (operador == true){
            valor2=valor1;
            }
            else{
            valor2=valor2Auxiliar;
            }
        }
    calculo();
}

// Alteração de Valores

function incremento(){
    if (historico == true && operador == false){
        n1=[];
        historico = false;
    }
    if (operador == false && historico==false){
        n1.push(valor);
        if (n1.includes(".") && n1.length==1){
            n1.unshift(0);
        }
        altValor1();
    }
    else{
        n2.push(valor);
        if (n2.includes(".") && n2.length==1){
            n2.unshift(0);
        }
        altValor2();
    }
}

function altValor1(){
    valor1 = String(n1.join(""));
    document.getElementById("valor1").innerHTML = valor1;
    valor1 = Number(n1.join(""));
}

function altValor2(){
    if (n2.includes("-")){
        valor2 = String(n2.join(""));
        document.getElementById("valor1").innerHTML = valor1 + " " + operando + " (" + valor2 +")";
        valor2 = Number(n2.join(""));
    }
    else{
        valor2 = String(n2.join(""));
        document.getElementById("valor1").innerHTML = valor1 + " " + operando + " " + valor2;
        valor2 = Number(n2.join(""));
    }
}

function operacao(){
    operador = true;
    if (n2.length>1){
        document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " " + valor2;
        if (n2.includes("-")){
            document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " (" + valor2 + ")"
        }
    }
    else{
        document.getElementById("valor1").innerHTML = + valor1 + " " + operando;
    }
}

// Operações Matemáticas

function calculo(){
    switch (operando)
            {
                case "+":
                    resultado = valor1+valor2;;
                break;
                case "-":
                    resultado = valor1-valor2;
                    valor1=Float(valor1)
                break;
                case "x":
                    resultado = valor1*valor2;
                break;
                case "/":
                    resultado = valor1/valor2;
                break;
            }
    historico = true;
    reiniciar();
}

// Funções relacionadas a limpar tela

function reiniciar(){
    valor1 = resultado;
    valor2Auxiliar=valor2;
    valor2=0;
    n1 = (Array.from(String(valor1)));
    n2 = [];
    operador = false;
    document.getElementById("valor1").innerHTML = resultado;
}

function limpar(){
    n1 = [];
    n2 = [];
    operador = false;
    document.getElementById("valor1").innerHTML = "0";
}

function limparParcial(){
    if (operador == false){
        n1 = [];
        valor1 = Number(n1.join(""));
        document.getElementById("valor1").innerHTML = "0";
    }
    else{
        n2 = [];
        valor2 = Number(n2.join(""));
        document.getElementById("valor1").innerHTML = + valor1 + " " + operando + " " + valor2;
    }
}