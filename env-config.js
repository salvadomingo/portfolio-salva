const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://filipjerga.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://filipjerga.herokuapp.com',
    'process.env.CLIENT_ID': 'sJhZeNvIY3k6Fa76v6GVwQcvGE1Z6SeS'
}