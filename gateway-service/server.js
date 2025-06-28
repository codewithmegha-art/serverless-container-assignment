const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Gateway Service Running!'));

app.listen(3003, () => console.log('Gateway Service on port 3003'));
