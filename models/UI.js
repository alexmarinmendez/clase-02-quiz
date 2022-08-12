export class UI {
    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text
    }
}