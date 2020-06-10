'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi título',
    teacher: 'Platzi',
    description: 'Está es mi descripción',
    topic: 'Graphql'
  },
  {
    _id: 'anyid2',
    title: 'Mi título 2',
    teacher: 'Platzi',
    description: 'Está es mi descripción',
    topic: 'Programación'
  },
  {
    _id: 'anyid3',
    title: 'Mi título3',
    teacher: 'Platzi',
    description: 'Está es mi descripción',
    topic: 'Demo'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(item => (item._id === args.id))
      return course.pop()
    }
  }
}