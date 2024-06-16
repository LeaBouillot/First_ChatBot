const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple chatbot created using TensorFlow.js.",
    "default": "I'm not sure how to respond to that. Can you ask something else?",
    "toxic": "Please keep the conversation respectful.",
};

const Form = document.getElementById('question');
const input = document.getElementById('input');
const answer = document.getElementById('answer');

Form.addEventListener('submit' async (e) => {
        // On annule le comportement par defaut du formulaire HTML (donc pas de rechargement de page)
    e.preventDefault();
    const inputValue = input.valut.toLowerCase().trim();
    // .toLowerCase() is used to convert all letters in a sentence to lowercase. In the second example, .trim() is used to remove any extra whitespace at the beginning or end of a string.
    if (inputValue = '') {
        return;
         // Si le formulaire est vide, alors on stop la fonction, pas de resultats

    }
    

})