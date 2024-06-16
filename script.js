const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple chatbot created using TensorFlow.js.",
    "default": "I'm not sure how to respond to that. Can you ask something else?",
    "toxic": "Please keep the conversation respectful.",
};

console.log(responses);

const form = document.getElementById('question');
const input = document.getElementById('text');
const answer = document.getElementById('answer');

form.addEventListener('submit', (event) => {
// Empêche le rechargement de la page
    event.preventDefault();
    const inputValue = input.value.toLowerCase().trim();

    if (inputValue in responses) {
        answer.innerText = responses[inputValue];
    } else {
        answer.innerText = responses['default'];
    }
    input.value = '';
  // Si le formulaire est vide, alors on stop la fonction, pas de resultats
})

/*
e.preventDefault(); On annule le comportement par defaut du formulaire HTML (donc pas de rechargement de page)
.toLowerCase() is used to convert all letters in a sentence to lowercase. In the second example, 
.trim() is used to remove any extra whitespace at the beginning or end of a string.

*/