const express = require('express')
const app = express()
const messagesController = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const portServer = 3001

app.get('/api/messages', messagesController.read)
app.post('/api/messages', messagesController.create)
app.put('/api/messages/:id', messagesController.update)
app.delete('/api/messages/:id', messagesController.delete)


app.listen(portServer, () => {
    console.log("Server is 3001")
})