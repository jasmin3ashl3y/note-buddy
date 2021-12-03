const notes = require('../db/db.json');
const updateNotes = require('../updateNotes');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    res.status(200).json(notes)
})


router.post('/notes', (req, res) => {
    notes.push(req.body);

    updateNotes(notes);

    res.status(200).json({ message: 'success' });
});

router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id;
    for (let j in notes) {
        if (notes[j].title == noteId) {
            notes.splice(j, 1);
        }
    }
    res.json(notes);
});


module.exports = router;
