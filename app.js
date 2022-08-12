import { data } from './data.js'
import { Question } from './models/Question.js'

const question = new Question(data[0].question, data[0].choices, data[0].answer)
const result = question.isCorrectAnswer('High Level Languages')
console.log(result)