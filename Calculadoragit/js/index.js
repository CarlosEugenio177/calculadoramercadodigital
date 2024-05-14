// Função para verificar se um valor é um número válido
function isValidNumber(value) {
    return !isNaN(value) && value !== '';
}

// Primeiro Formulário: leadCalculatorForm
document.getElementById("leadCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Ticketproduto = parseFloat(document.getElementById("Ticketproduto").value);
    var Roas = parseFloat(document.getElementById("Roas").value);
    var Leads = parseFloat(document.getElementById("Leads").value);
    var VendasLancamento = parseFloat(document.getElementById("VendasLancamento").value);

    if (!isValidNumber(Ticketproduto) || !isValidNumber(Roas) || !isValidNumber(Leads) || !isValidNumber(VendasLancamento)) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    var custoPorLead = (Ticketproduto / Roas) / (Leads / VendasLancamento);

    document.getElementById("custoPorLead").textContent = custoPorLead.toFixed(2);
    document.getElementById("resultado").style.display = "block";
});

// Segundo Formulário: criativoscalculadoraform
document.getElementById("criativoscalculadoraform").addEventListener("submit", function(event) {
    event.preventDefault();

    var TicketprodutoPerpetuo = parseFloat(document.getElementById("TicketprodutoPerpetuo").value);
    var CPAPerpetuo = parseFloat(document.getElementById("CPAPerpetuo").value);
    var InvestimentoPerpetuo = parseFloat(document.getElementById("InvestimentoPerpetuo").value);

    if (!isValidNumber(TicketprodutoPerpetuo) || !isValidNumber(CPAPerpetuo) || !isValidNumber(InvestimentoPerpetuo)) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    var projecaoPerpetuo = InvestimentoPerpetuo / 30;
    var QNTD_Conj_Cria = projecaoPerpetuo / (CPAPerpetuo / 3);

    document.getElementById("projecaoPerpetuo").textContent = projecaoPerpetuo.toFixed(2);
    document.getElementById("resultado1").style.display = "block";
    document.getElementById("QuantidadesConjutos").textContent = QNTD_Conj_Cria.toFixed(0);
});

// Terceiro Formulário: CalculadoraDistribuicaoForm
document.getElementById("CalculadoraDistribuicaoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Alcance = parseFloat(document.getElementById("Alcance").value);
    var CPMDistribuicao = parseFloat(document.getElementById("CPMDistribuicao").value);
    var frequenciaDesejada = parseFloat(document.getElementById("frequenciaDesejada").value);

    if (!isValidNumber(Alcance) || !isValidNumber(CPMDistribuicao) || !isValidNumber(frequenciaDesejada)) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    var projecaoDistribuicao = (Alcance / 1000) * CPMDistribuicao * frequenciaDesejada;

    document.getElementById("projecaoDistribuicao").textContent = projecaoDistribuicao.toFixed(2);
    document.getElementById("resultado2").style.display = "block";
});




