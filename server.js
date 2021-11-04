const express = require('express')
const app = express();

const PORT = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
    res.send('Hello My World')
})

app.listen(PORT, () => {
    console.log(`Server listens on port: ${PORT}`);
})