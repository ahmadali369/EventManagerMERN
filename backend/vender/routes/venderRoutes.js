const express = require('express');

const router = express.Router(); 

const {getOneService, createService,  deleteService, updateService, getServices} = require('../controllers/venderController')

router.get('/', getServices); 
router.get('/:id', getOneService); 
router.post("/", createService); 
router.delete('/:id',deleteService); 
router.patch('/:id', updateService); 

module.exports = router; 