import express from 'express';
import { getOneService, createService, deleteService, updateService, getServices } from '../controller/venderController.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getOneService);
router.post("/", createService);
router.delete('/:id', deleteService);
router.patch('/:id', updateService);

export default router;