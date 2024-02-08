const notesCtrl = {};

notesCtrl.getNotes = (req,res) => res.json({Message: []})

notesCtrl.createNotes = (req,res) => res.json({Message: 'Notee Saved'});

notesCtrl.getnote = (req,res) => res.json({Title: 'Data Note'})

notesCtrl.updateNote = (req,res) => res.json({Message: 'Note Updated'})

notesCtrl.deleteNote = (req,res) => res.json({Message: 'Note Deleted'})

module.exports = notesCtrl;