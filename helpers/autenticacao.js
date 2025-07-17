const request = require ('supertest');

const obterToken = async (usuario, senha) => {
            const respostaLogin = await request(process.env.BASE_URL) 
                .post('/login') // Parênteses fechando aqui
                .set('Content-Type', 'application/json')
                .send({
                username: 'julio.lima',
                senha: '123456'
                })
    
                return token = respostaLogin.body.token
}

module.exports = {
    obterToken
}