const commissionRates = [
    { rate: 0.035, maxPerAgent: 2800 },
    { rate: 0.002, maxPerAgent: 3200 },
    // Adicione mais níveis conforme necessário
];

function calculateCommissions() {
    const form = document.getElementById('commissionForm');
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpar resultados anteriores

    commissionRates.forEach((tier, index) => {
        const agentsInput = form[`agentsTier${index + 1}`];
        const numAgents = parseInt(agentsInput.value) || 0;
        const commissionPerAgent = tier.rate * 100; // Converter para porcentagem
        const totalCommission = Math.min(commissionPerAgent * numAgents, tier.maxPerAgent * numAgents);

        const tierResult = document.createElement('div');
        tierResult.classList.add('tier-result');
        tierResult.innerHTML = `
            <h3>Nível ${index + 1}</h3>
            <p>Número de agentes: ${numAgents}</p>
            <p>Comissão por agente: €${(commissionPerAgent * 100).toFixed(2)}</p>
            <p>Comissão total: €${totalCommission.toFixed(2)}</p>
        `;
        resultsDiv.appendChild(tierResult);
    });
}
