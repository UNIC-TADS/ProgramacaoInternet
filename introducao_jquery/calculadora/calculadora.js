//http://jsfiddle.net/43wqLtdc/16/
//Para fazer o seletor dos botões é possível utilizar negação
//$("input[type=button]:not(.operacoes)")
//$("input[type=button]").not(".operacoes");

"use strict";
//Calculos
var $valorAnterior = null;
var $ultimaOperacao = null;
var $txtValor = null;
var $txtHistorico = null;
var $botoes = null;
var $operacoes = null;

$(document).ready(function () {
    //Seletores
    $txtValor = $("#txtValor");
    $txtHistorico = $("#txtHistorico");
    $botoes = $(".botoes");
    $operacoes = $(".operacoes");

    //Delegacao de Eventos

    //Botoes - Adiciona valor ao campo
    $botoes.on("click", function () {
        $txtValor.val($txtValor.val() + $(this).val());
    });

    //Acionando operacoes
    $operacoes.on("click", function () {
        var $operacao = $(this).val();
        $ultimaOperacao = $operacao;
        resultado();
    });

});

//FUNCOES DE OPERACAO
function resultado() {
    if ($valorAnterior === null) {
        $valorAnterior = $txtValor.val();
        atualizaHistorico($valorAnterior);
        $txtValor.val("");
    } else {
        atualizaHistorico($txtValor.val());
        //Comparacao de bytes [ === ]
        if ($ultimaOperacao === "+") {
            $valorAnterior = somar($valorAnterior, $txtValor.val());
        }else
        if ($ultimaOperacao === "="){
            $txtValor.val($valorAnterior);
            $txtHistorico.val("");
        }else
        if ($ultimaOperacao === "C"){
            $txtValor.val("");
            $txtHistorico.val("");
            $valorAnterior = null;
            $ultimaOperacao = null;
        }
        $txtValor.val($valorAnterior); 
    }
}

function somar($valor1, $valor2) {
    return parseFloat($valor1) + parseFloat($valor2);
}

function atualizaHistorico($valor){
        $txtHistorico.val($txtHistorico.val() + " " + 
                        $valor + " " + $ultimaOperacao);
 }





/*$(function(){
    var $valor = $("#valor");
    var $calc = $("#calc");
    var $soma = $("#soma");
    var $txtHistorico = $("div");
    var $valorAnterior = null;
    var $ultimaOperacao = null;
    $soma.on("click", function(){
       $ultimaOperacao = "+";
       resultado();
    });
    $calc.on("click", function(){
        $historico.html("")
        resultado();
    });
    function resultado(){
        if($valorAnterior === null){
            $valorAnterior = $valor.val();
            atualizaHistorico($valorAnterior);
        }else{
           atualizaHistorico($valor.val());
           if($ultimaOperacao == "+"){
           $valorAnterior = somar($valorAnterior,$valor.val());    
            }else
            if($ultimaOperacao == "-"){
                $valorAnterior = subtrair($valorAnterior,$valor.val());    
            }
            $valor.val($valorAnterior); 
        }
        
    }
    
    function somar(valor1, valor2){
        return parseFloat(valor1)+parseFloat(valor2);
    }
    function subtrair(valor1, valor2){
        return parseFloat(valor1)-parseFloat(valor2);
    }
    
    function atualizaHistorico($valor){
        $historico.html($historico.html() + " " + 
                        $valor + " " + $ultimaOperacao);
    }
});*/