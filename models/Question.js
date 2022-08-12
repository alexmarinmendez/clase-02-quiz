export class Question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    isCorrectAnswer(choice) {
        return choice === this.answer
    }
}