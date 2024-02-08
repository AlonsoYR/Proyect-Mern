const { Router } = require('express');
const router = Router();

const { getNotes, createNotes, getnote, deleteNote, updateNote } = require('../controllers/note.controller');

router.route('/')
    .get(getNotes)
    .post(createNotes); 
 
router.route('/:id')
    .get(getnote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;