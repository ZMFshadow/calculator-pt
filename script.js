// Atualiza o valor mostrado para cada Tier
function updateTierValue(tier) {
    const slider = document.getElementById(`agentsTier${tier}`);
    const valueDisplay = document.getElementById(`agentsTier${tier}Value`);
    valueDisplay.textContent = `${slider.value} agentes no Nível ${tier}`;
}

// Exemplo de cálculo (você pode modificar a lógica conforme necessário)
function calculateCommissions() {
    const homesSoldPerYear = document.getElementById('homesSoldPerYear').value;
    const avgHomePrice = document.getElementById('avgHomePrice').value;
    const commissionPercentage = document.getElementById('commissionPercentage').value;

    let results = '';

    // Exemplo de cálculo para o Tier 1 (você pode ajustar para os outros níveis)
    const agentsTier1 = document.getElementById('agentsTier1').value;
    const commissionTier1 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier1 * 0.035;
    results += `Tier 1 income: €${commissionTier1.toFixed(2)}\n`;

    // Repita para os outros níveis (Tier 2 a 7)

    document.getElementById('results').textContent = results;
}
