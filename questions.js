import { data } from './data.js'
import { Question } from './models/Question.js'

export const questionsArray = data.map(q => new Question(q.question, q.choices, q.answer))