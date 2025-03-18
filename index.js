function calculateScore() {
    let score = 0;
    if (document.getElementById('q1').value == 8) score++;
    if (document.getElementById('q2').value == 6) score++;
    if (document.getElementById('q3').value == 12) score++;
    document.getElementById('result').innerText = "Сіздің нәтижеңіз: " + score + "/3";
}