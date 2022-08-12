import { data } from './data.js'
import { Question } from './models/Question.js'

const questionsArray = data.map(q => new Question(q.question, q.choices, q.answer))

// const question = new Question(data[0].question, data[0].choices, data[0].answer)
const result = questionsArray[0].isCorrectAnswer('High Level Languages')
console.log(result)