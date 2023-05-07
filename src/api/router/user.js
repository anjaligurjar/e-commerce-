import express from 'express';

export const router = express.Router();
router.post('/reigistration', (req, res, next) => {
  const body = req.body;
  console.info(body);
});

router.post('/login', (req, res, next) => {
  const body = req.body;
  console.info(body);
});

router.post('/forget-password', (req, res, next) => {
  const body = req.body;
  console.info(body);
});
router.post('/login', (req, res, next) => {
  const body = req.body;
  console.info(body);
});

