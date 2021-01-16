module.exports = app => {
    app.get('/atendimento', (req,res) => res.send('Voçe está na rota de atendimento!'))
} 