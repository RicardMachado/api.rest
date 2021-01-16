module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Voçe está na rota de atendimento que está realizando um GET'))

    app.post('/atendimento', (req, res) => {
     
        console.log(req.body)
        res.send('Voçe está na rota de atendimento que está realizando um POST')
    })
} 