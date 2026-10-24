
const formulario = document.getElementById('meuForm');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();


    const nome = document.getElementById('nome').value;
    const q1 = document.getElementById('q1').value.toLowerCase();
    const q2 = document.getElementById('q2').value.toLowerCase();
    const q3 = document.querySelector('input[name="q3"]:checked').value;


    let acertos = 0;
    if (q1 === 'maria firmina dos reis') {
        acertos++;
    }
    if (q2 === 'mary ann evans') {
        acertos++;
    }
    if (q3 === 'emily') {
        acertos++;
    }
    let mensagem;
    if (acertos === 3) {
        mensagem = 'Parabéns, você conhece bem essas autoras!';
    } else if (acertos > 0 && acertos < 3) {
        mensagem = 'Bom começo! Releia o texto e tente de novo.';
    } else {
        mensagem = 'Releia o texto acima e tente de novo.';
    }

    resultado.innerHTML = `<p>${nome}, você acertou ${acertos} de 3. ${mensagem}</p>`;
    console.log(`${nome} acertou ${acertos} de 3`);
});