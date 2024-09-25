// script.js

// Definir as palavras-chave e suas descrições
const keywords = [
    // (sua lista de palavras-chave e descrições aqui)
];

// Função para exibir todos os termos e descrições
function displayKeywords() {
    console.log("Palavras-chave e conceitos em TypeScript:");
    keywords.forEach(keyword => {
        console.log(`${keyword.term}: ${keyword.description}`);
    });
}

// Chamando a função
displayKeywords();




document.getElementById('set-alarms').addEventListener('click', function() {
    const alarmInputs = [
        document.getElementById('alarm-time-1').value,
        document.getElementById('alarm-time-2').value,
        document.getElementById('alarm-time-3').value,
    ];

    const now = new Date();
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = ""; // Limpa mensagens anteriores

    alarmInputs.forEach((alarmInput, index) => {
        if (!alarmInput) {
            alert('Por favor, defina todos os horários.');
            return;
        }

        const [hours, minutes] = alarmInput.split(':').map(Number);
        const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

        // Se o horário já passou hoje, defina para amanhã
        if (alarmTime <= now) {
            alarmTime.setDate(alarmTime.getDate() + 1);
        }

        const timeToAlarm = alarmTime.getTime() - now.getTime();

        setTimeout(() => {
            document.getElementById('alarm-sound').play();
            messageDiv.innerHTML += `Alarme ${index + 1} tocando às ${alarmInput}!<br>`;
        }, timeToAlarm);
    });

    messageDiv.innerHTML += "Alarmes definidos!<br>";
});
