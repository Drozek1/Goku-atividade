import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

const dragonball = []

servidor.get('/dragonball', (req, res) => {
    res.send(dragonball)
})

servidor.post('/dragonball', (req, res) => {
    const dragon = req.body
    dragonball.push(dragon)

    res.send('personagem cadastrado!')
})

servidor.listen(3000, () => {console.log('deu bom')})

const vegeta = []

servidor.get('/vegeta', (req, res) => {
    res.send(vegeta)
})

servidor.post('/vegeta', (req, res) => {
    const saiyajin = req.body
    vegeta.push(saiyajin)

    res.send('personagem cadastrado!')
})
