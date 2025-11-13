function compareCosts() {
    const contractSim = parseFloat(document.getElementById('contractSim').value) || 0;
    const contractPhone = parseFloat(document.getElementById('contractPhone').value) || 0;
    const downpayment = parseFloat(document.getElementById('downpayment').value) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    const outrightPhone = parseFloat(document.getElementById('outrightPhone').value) || 0;
    const outrightSim = parseFloat(document.getElementById('outrightSim').value) || 0;

    const months = 24;

    // Total contract cost = monthly SIM + monthly phone × 24 + downpayment − discount
    const totalContract = (contractSim + contractPhone) * months + downpayment - discount;

    // Total outright cost = outright phone + monthly SIM × 24
    const totalOutright = outrightPhone + (outrightSim * months);

    let resultText = `
        <p><strong>Total cost (Contract):</strong> £${totalContract.toFixed(2)}</p>
        <p><strong>Total cost (Outright):</strong> £${totalOutright.toFixed(2)}</p>
    `;

    if (totalContract > totalOutright) {
        resultText += `<p>💡 <strong>Buying outright is cheaper by £${(totalContract - totalOutright).toFixed(2)}</strong></p>`;
    } else if (totalOutright > totalContract) {
        resultText += `<p>💡 <strong>Buying on contract is cheaper by £${(totalOutright - totalContract).toFixed(2)}</strong></p>`;
    } else {
        resultText += `<p>Both options cost the same overall.</p>`;
    }

    document.getElementById('result').innerHTML = resultText;
}
