const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.getNotes = async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body;
    const NewNote = new Note({
        title,
        content,
        date,
        author
    })
    await NewNote.save();
    res.json({Message: 'Note Saved'})
};

notesCtrl.getnote = async (req,res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesCtrl.updateNote = async (req,res) => {
    const {title, content, author} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    })
    res.json({Message: 'Note Updated'})
}

notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({Message: 'Note Deleted'})
}

module.exports = notesCtrl;