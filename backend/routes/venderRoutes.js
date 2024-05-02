const express = require('express');
// const { getOneService } = require('../controllers/venderController');
const router = express.router(); 

const {getOneService, createService,  deleteService, updateService, getServices} = require('../controllers/venderController')

router.get('/', getServices); 
router.get('/:id', getOneService); 
router.post("/", createService); 
router.delete('/:id',deleteService); 
router.patch('/:id', updateService); 

module.exports = router; 