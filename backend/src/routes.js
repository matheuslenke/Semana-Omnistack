const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.index);

module.exports = routes;
// app.post('/users', (req, res) => {
//     return res.json({ message: "hello User! "});
// });
// app.get('/users', (req, res) => {
//     return res.json({ idade: req.query.idade});
// });
// // });
