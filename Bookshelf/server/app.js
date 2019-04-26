const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

let books = []

app.post('/api/books', (req,res) => {
  let title = req.body.title
  let genre = req.body.genre
  let author = req.body.author
  let imageURL = req.body.imageURL

  books.push({title: title, genre: genre, author: author, imageURL: imageURL})
  res.json({success: true, message: 'Book was sucessfully added!'})
})

  app.get('/api/books', (req, res) =>{
    res.json(books)
  })


app.listen(8080,() => {
  console.log('Server is running....')
})
