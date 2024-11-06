const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deletNoteByIdHandler } = require("./handler");
//routes berfungsi untuk menentukan api apa yang akan dijalankan pada tiap interface yang berbeda
const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deletNoteByIdHandler,
  }
];

module.exports = routes;

