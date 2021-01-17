const Atendimento = require ('../models/atendimentos')

module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Voçe está na rota de atendimento que está realizando um GET'))

    app.post('/atendimento', (req, res) => {
     
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Voçe está na rota de atendimento que está realizando um POST')
    })
} 