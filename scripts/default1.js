(function(){
this.calculatorNamespace=this.calculatorNamespace || {};
var ns =this.calculatorNamespace;
ns.initialize=function(){
var calculator= new ns.Calculator();
$('button[id^="btnNumber"]').on('click',calculator.numberClick)
}
ns.Calculator=(function(){
function Calculator(){}
Calculator.prototype.numberClick=function(){
$('#txtInput').val($('#txtInput').val()=='0'? $(this).text():$('#txtInput').val()+$(this).text());
}
}())
})();