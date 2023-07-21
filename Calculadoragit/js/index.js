/*----------------------------------------------------------!CALCULOS!-------------------------------------------------------------------------------------------*/
document.getElementById("leadCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Ticketproduto = parseInt(document.getElementById("Ticketproduto").value);
    var Roas = parseInt(document.getElementById("Roas").value);
    var Leads = parseFloat(document.getElementById("Leads").value);
    var VendasLancamento = parseFloat(document.getElementById("VendasLancamento").value);

    var custoPorLead = (Ticketproduto / Roas) / (Leads / VendasLancamento);

    document.getElementById("custoPorLead").textContent = custoPorLead.toFixed(2);
    document.getElementById("resultado").style.display = "block";
});

document.getElementById("criativoscalculadoraform").addEventListener("submit", function(event) {
    event.preventDefault();

    var TicketprodutoPerpetuo = parseInt(document.getElementById("TicketprodutoPerpetuo").value);
    var CPAPerpetuo = parseInt(document.getElementById("CPAPerpetuo").value);
    var InvestimentoPerpetuo = parseInt(document.getElementById("InvestimentoPerpetuo").value);

    var projecaoPerpetuo = InvestimentoPerpetuo/30;
    var QNTD_Conj_Cria = projecaoPerpetuo/(CPAPerpetuo/3)

    document.getElementById("projecaoPerpetuo").textContent = projecaoPerpetuo.toFixed(2);
    document.getElementById("resultado1").style.display = "block";
    document.getElementById("QuantidadesConjutos").textContent = QNTD_Conj_Cria.toFixed(0);
});
document.getElementById("CalculadoraDistribuicaoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Alcance = parseFloat(document.getElementById("Alcance").value);
    var CPMDistribuicao = parseFloat(document.getElementById("CPMDistribuicao").value);
    var frequenciaDesejada = parseFloat(document.getElementById("frequenciaDesejada").value);

    var projecaoDistribuicao = (Alcance/1000)*CPMDistribuicao*frequenciaDesejada;

    document.getElementById("projecaoDistribuicao").textContent = projecaoDistribuicao.toFixed(2);
    document.getElementById("resultado2").style.display = "block";
});
/*-----------------------------------------------------------!CALCULOS!------------------------------------------------------------------------------------*/
/*----------------------------------------------------------!ENVIO DE FORM!------------------------------------------------------------------------------ */
const formsubmit = (event) => {
    event.preventDefault();
   
   
    const Ticketproduto = document.querySelector('input[name=Ticketproduto]').value;
    const Roas = document.querySelector('input[name=Roas]').value;
    const Leads = document.querySelector('input[name=Leads]').value;
    const VendasLancamento = document.querySelector('input[name=VendasLancamento]').value;
   fetch('', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Ticketproduto, Leads, Roas, VendasLancamento,})
   });

}
document.getElementById('leadCalculatorForm').addEventListener('submit', formsubmit);


const formsubmit2 = (event) => {
    event.preventDefault();
    const  TicketprodutoPerpetuo = document.querySelector('input[name=Ticketproduto]').value;
    const  CPAPerpetuo = document.querySelector('input[name=CPA]').value;
    const  InvestimentoPerpetuo = document.querySelector('input[name=Investimento]').value;
    fetch('', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ TicketprodutoPerpetuo,CPAPerpetuo,InvestimentoPerpetuo})
});
}
document.getElementById('criativoscalculadoraform').addEventListener('submit', formsubmit);

const formsubmit3 = (event) => {
    event.preventDefault();
    const Alcance = document.querySelector('input[name=Alcance]').value;
    const CPMDistribuicao = document.querySelector('input[name=CPMDistribuicao]').value;
    const frequenciaDesejada = document.querySelector('input[name=frequenciaDesejada]').value;
    fetch('', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Alcance,CPMDistribuicao,frequenciaDesejada})
   });


}
document.getElementById('CalculadoraDistribuicaoForm').addEventListener('submit', formsubmit);

/*----------------------------------------------------------!ENVIO DE FORM!------------------------------------------------------------------------------ */
 


