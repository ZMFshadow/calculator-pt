// Atualiza o valor mostrado para cada Tier
function updateTierValue(tier) {
    const slider = document.getElementById(`agentsTier${tier}`);
    const valueDisplay = document.getElementById(`agentsTier${tier}Value`);
    valueDisplay.textContent = `${slider.value} agentes no Nível ${tier}`;
}

// Função para calcular comissões para todos os níveis (Tier 1 a 7) e o total
function calculateCommissions() {
    const homesSoldPerYear = document.getElementById('homesSoldPerYear').value;
    const avgHomePrice = document.getElementById('avgHomePrice').value;
    const commissionPercentage = document.getElementById('commissionPercentage').value;

    let totalAnnualShare = 0;

    // Cálculo para o Tier 1
    const agentsTier1 = document.getElementById('agentsTier1').value;
    const commissionTier1 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier1 * 0.035;
    totalAnnualShare += commissionTier1;
    document.getElementById('tier1Income').textContent = commissionTier1.toFixed(2);

    // Cálculo para o Tier 2
    const agentsTier2 = document.getElementById('agentsTier2').value;
    const commissionTier2 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier2 * 0.002;
    totalAnnualShare += commissionTier2;
    document.getElementById('tier2Income').textContent = commissionTier2.toFixed(2);

    // Cálculo para o Tier 3
    const agentsTier3 = document.getElementById('agentsTier3').value;
    const commissionTier3 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier3 * 0.001;
    totalAnnualShare += commissionTier3;
    document.getElementById('tier3Income').textContent = commissionTier3.toFixed(2);

    // Cálculo para o Tier 4
    const agentsTier4 = document.getElementById('agentsTier4').value;
    const commissionTier4 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier4 * 0.001;
    totalAnnualShare += commissionTier4;
    document.getElementById('tier4Income').textContent = commissionTier4.toFixed(2);

    // Cálculo para o Tier 5
    const agentsTier5 = document.getElementById('agentsTier5').value;
    const commissionTier5 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier5 * 0.001;
    totalAnnualShare += commissionTier5;
    document.getElementById('tier5Income').textContent = commissionTier5.toFixed(2);

    // Cálculo para o Tier 6
    const agentsTier6 = document.getElementById('agentsTier6').value;
    const commissionTier6 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier6 * 0.005;
    totalAnnualShare += commissionTier6;
    document.getElementById('tier6Income').textContent = commissionTier6.toFixed(2);

    // Cálculo para o Tier 7
    const agentsTier7 = document.getElementById('agentsTier7').value;
    const commissionTier7 = (avgHomePrice * (commissionPercentage / 100)) * agentsTier7 * 0.005;
    totalAnnualShare += commissionTier7;
    document.getElementById('tier7Income').textContent = commissionTier7.toFixed(2);

    // Calcular valores anual e mensal
    const totalMonthlyShare = totalAnnualShare / 12;

    // Atualizar resultados no HTML
    document.getElementById('expTotalAnnualShare').textContent = totalAnnualShare.toFixed(2);
    document.getElementById('expTotalMonthlyShare').textContent = totalMonthlyShare.toFixed(2);
}
