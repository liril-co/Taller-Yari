const millasInput= document.getElementById('millas');
const kilometrosInput= document.getElementById('kilometros')

millasInput.addEventListener('input', (e) => {
    const millas= e.target.value;
    kilometrosInput.value = millas * 1.60934;
});
kilometrosInput.addEventListener('input', (e) => {
    const kilometros= e.target.value;
    millasInput.value = kilometros / 1.60934;
});