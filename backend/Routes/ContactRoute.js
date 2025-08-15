const express = require('express');
const app = express();
const router = express.Router();
const ContactController = require('../Controllers/ContactController');

router.post('/contacts', ContactController.addContact);
module.exports = router;