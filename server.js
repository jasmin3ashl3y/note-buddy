const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//const updateNotes = require('./updateNotes');
//const notes = require('./db/db.json');

const PORT = process.env.PORT || 3004;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Get notes returning notes.html

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/notes.html'));
// });

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/api/notes', (req, res) => {

// })

app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    updateNotes(notes);
    res.status(200).json({ message: 'success' })
})


app.delete('/api/notes/:id', (req, res) => {
    const idx = parseInt(req.params.id) -1;
    notes.splice(idx, 1)
    updateNotes(notes);
    res.status(200).json({ message: 'success' })
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})