document.getElementById('inputUnit').addEventListener('change', updateConversion);
document.getElementById('outputUnit').addEventListener('change', updateConversion);
document.getElementById('tempInput').addEventListener('input', updateConversion);

function updateConversion() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const explanation = document.getElementById('explanation');
    
    if (isNaN(tempInput)) {
        document.getElementById('tempOutput').value = '';
        explanation.textContent = 'Formula: ';
        return;
    }

    let tempOutput;
    let formula;

    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        tempOutput = (tempInput * 9/5) + 32;
        formula = `(${tempInput}°C × 9/5) + 32 = ${tempOutput.toFixed(2)}°F`;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        tempOutput = (tempInput - 32) * 5/9;
        formula = `(${tempInput}°F - 32) × 5/9 = ${tempOutput.toFixed(2)}°C`;
    } else {
        tempOutput = tempInput;
        formula = `${tempInput}°${inputUnit === 'celsius' ? 'C' : 'F'} = ${tempOutput.toFixed(2)}°${outputUnit === 'celsius' ? 'C' : 'F'}`;
    }

    document.getElementById('tempOutput').value = tempOutput.toFixed(2);
    explanation.textContent = `Formula: ${formula}`;
}
