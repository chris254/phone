function compareCosts() {

    const contractLength = parseFloat(document.getElementById('contractLength').value) || 0;
    const contractSim = parseFloat(document.getElementById('contractSim').value) || 0;
    const contractPhone = parseFloat(document.getElementById('contractPhone').value) || 0;
    const contractDiscount = parseFloat(document.getElementById('contractDiscount').value) || 0;
    const downpayment = parseFloat(document.getElementById('downpayment').value) || 0;
    const outrightPhone = parseFloat(document.getElementById('outrightPhone').value) || 0;
    const outrightSim = parseFloat(document.getElementById('outrightSim').value) || 0;
    const outrightDiscount = parseFloat(document.getElementById('outrightDiscount').value) || 0;

    
    const months = contractLength*12;

    const totalContract = (contractSim + contractPhone) * months + downpayment - contractDiscount;
    const totalOutright = outrightPhone + (outrightSim * months) - outrightDiscount;

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
