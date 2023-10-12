//-------------------------------------1------------------------------------------
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
function calculate() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const perimeterOutput = document.getElementById('perimeter');
    const areaOutput = document.getElementById('area');
    const diagonalOutput = document.getElementById('diagonal');

    if (length > 0 && width > 0) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(length ** 2 + width ** 2);

        perimeterOutput.innerText = `Периметр: ${perimeter}`;
        areaOutput.innerText = `Площа: ${area}`;
        diagonalOutput.innerText = `Діагональ: ${diagonal}`;
    } else {
        perimeterOutput.innerText = "";
        areaOutput.innerText = "";
        diagonalOutput.innerText = "";
    }

}

lengthInput.addEventListener('input', calculate);
widthInput.addEventListener('input', calculate);


//-------------------------------------2------------------------------------------
function sendMessage(inputId, user) {
    let messageInput = document.getElementById(inputId)
    let message = messageInput.value
    let chatDiv = document.querySelector('.chat-middle .chat-box')

    if (message.trim() !== "") {
        let messageElement = document.createElement('p')

        messageElement.innerHTML = `<div class="${user}-message message-box"><strong>${user}</strong><br> ${message}</div>`;

        if (user === 'user1') {
            messageElement.classList.add('user1-message')
        } else {
            messageElement.classList.add('user2-message')
        }

        chatDiv.appendChild(messageElement)
        messageInput.value = ""
    }
}

//-------------------------------------3------------------------------------------
const ukrainianToLatinMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh', 'з': 'z',
    'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ь': "'", 'ю': 'u', 'я': 'ia',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z',
    'И': 'Y', 'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P',
    'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
    'Ь': "'", 'Ю': 'Yu', 'Я': 'Ya'
};

function transliterateUkrainian(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += ukrainianToLatinMap[char] || char;
    }
    return result;
}

function containsUkrainianCharacters(text) {
    const ukrainianRegex = /[а-яґєії]/i;
    return ukrainianRegex.test(text);
}

function transliterate() {
    const ukrainianText = document.getElementById('ukrainianText').value;
    const transliteratedTextElement = document.getElementById('transliteratedText');
    const notAppropriateMessage = document.getElementById('notAppropriate');

    if (containsUkrainianCharacters(ukrainianText)) {
        notAppropriateMessage.innerText = '';
        transliteratedTextElement.value = transliterateUkrainian(ukrainianText);
    } else {
        notAppropriateMessage.innerText = 'Введіть текст українською мовою';
        transliteratedTextElement.value = '';
    }
}

//-------------------------------------4------------------------------------------
function getDayOfWeek(year, month, day) {
    const a = Math.floor((14 - month) / 12)
    const y = year - a
    const m = month + 12 * a - 2
    return (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7
}

function dayResult(selectedDate) {
    const date = new Date(selectedDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    let currentDate = new Date()
    const resultElement = document.getElementById("result")
    if (date <= currentDate) {
        const dayOfWeekNumber = getDayOfWeek(year, month, day)

        const allDaysOfWeekStr = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п'ятницю", "суботу"]
        const dayOfWeekStr = allDaysOfWeekStr[dayOfWeekNumber]

        resultElement.textContent = `Ви народились у ${dayOfWeekStr}`
    } else if (date > currentDate) {
        resultElement.textContent = "Ви ще не народились :("
    } else {
        resultElement.textContent = "Введіть коректну дату"
    }
}

function datePickerChange() {
    dayResult(this.value);
}

const datePicker = document.getElementById("datePicker");
datePicker.addEventListener("change", datePickerChange);