import express from 'express';
import participant from '../controllers/ParticipantController.js';

const router =express.Router();

router.get('/:id',participant.onGetAll)


export default router;

