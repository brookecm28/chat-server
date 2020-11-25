const { builtinModules } = require("module")

const messages = []

let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({
            id,
            text,
            time,
        })
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        const {id} = req.params
        const index = messages.findIndex(msg => msg.id === +id)
        let msg = messages[index]
 

        messages[index] = {
            id,
            text: text || msg.text,
            time: msg.time
            }
            console.log(messages[index])
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const {id} = req.params
        const index = messages.findIndex(msg => msg.id === +id)
        let msg = messages[index]

        messages.splice(index, 1)

        res.status(200).send(messages)
    },
}