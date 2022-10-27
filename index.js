const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '05') {
        res.send(courses)
    } else {
        const categoryCourses = courses.filter(course => course.category_id === id);
        res.send(categoryCourses)
    }
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log(`Server is ruunig on port ${port}`)
})