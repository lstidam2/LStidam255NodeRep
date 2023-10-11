const express = require('express');
const classController = require('../controllers/classController');

const router = express.Router();

router.get('/create', classController.class_create_get);
router.get('/', classController.class_index);
router.post('/', classController.class_create_post);
router.get('/:id', classController.class_details);
router.delete('/:id', classController.class_delete);
router.get('/edit/:id', classController.class_edit_details);
router.post('/edit/:id', classController.class_edit_post);

module.exports = router;