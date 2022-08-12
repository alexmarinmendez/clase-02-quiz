import { questionsArray } from "./questions.js"
import { Quiz } from "./models/Quiz.js"
import { UI } from './models/UI.js'

const main = () => {
    const quiz = new Quiz(questionsArray)
    const ui = new UI()

    ui.showQuestion(quiz.getCurrentQuestion().text)
    ui.showChoices(quiz.getCurrentQuestion().choices)
}

main()