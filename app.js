import { questionsArray } from "./questions.js"
import { Quiz } from "./models/Quiz.js"

const main = () => {
    const quiz = new Quiz(questionsArray)
    console.log(quiz)
}

main()