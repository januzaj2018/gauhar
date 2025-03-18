function calculateScore() {
    let score = 0;
    const answers = {
        q1: "8",
        q2: "6",
        q3: "12"
    };

    Object.keys(answers).forEach(question => {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    });

    document.getElementById("result").innerText = `Сіздің баллыңыз: ${score} / 3`;
}
