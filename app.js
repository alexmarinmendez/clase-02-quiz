import { questionsArray } from "./questions.js"
import { Quiz } from "./models/Quiz.js"
import { UI } from './models/UI.js'

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getCurrentQuestion().text)
        ui.showChoices(quiz.getCurrentQuestion().choices, (currentChoice) => {
            quiz.validateAndContinue(currentChoice)
            console.log(quiz.score)
            renderPage(quiz, ui)
        })
    }
}

const main = () => {
    const quiz = new Quiz(questionsArray)
    const ui = new UI()

    renderPage(quiz, ui)
}

main()