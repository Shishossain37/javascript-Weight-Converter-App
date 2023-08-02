document.addEventListener("DOMContentLoaded", function () {
    const poundsInput = document.getElementById("poundsInput");
    const gramsOutput = document.getElementById("grams");
    const kilogramsOutput = document.getElementById("kilograms");
    const ouncesOutput = document.getElementById("ounces");

    poundsInput.addEventListener("input", function () {
        const pounds = parseFloat(poundsInput.value);

        if (!isNaN(pounds)) {
            const grams = pounds * 453.592;
            const kilograms = pounds * 0.453592;
            const ounces = pounds * 16;

            gramsOutput.textContent = grams.toFixed(2) + " g";
            kilogramsOutput.textContent = kilograms.toFixed(2) + " kg";
            ouncesOutput.textContent = ounces.toFixed(2) + " oz";
        } else {
            gramsOutput.textContent = "";
            kilogramsOutput.textContent = "";
            ouncesOutput.textContent = "";
        }
    });
});
