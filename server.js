const express = require('express');
const path = require('path');
const updateNotes = require('./updateNotes');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3004;
const app = express();

app.use(express.urlenconded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

    



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