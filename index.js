const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {    
    res.render('home', { 
        name: 'Teodor Jonsson',
        place: '</salt>'
     });
});

app.listen(3000, () => {
    console.log('server is running on port: 3000! :)')
})

