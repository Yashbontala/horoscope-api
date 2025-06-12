
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const rateLimiter = require('../middlewares/rateLimiter');
const { getTodayHoroscope, getHistory } = require('../controllers/horoscopeController');

/**
 * @swagger
 * tags:
 *   name: Horoscope
 *   description: Daily and historical horoscopes
 */


/**
 * @swagger
 * /horoscope/today:
 *   get:
 *     summary: Get today’s horoscope for the user
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns today’s horoscope
 *       401:
 *         description: Unauthorized or invalid token
 */
router.get('/today', auth, rateLimiter, getTodayHoroscope);

/**
 * @swagger
 * /horoscope/history:
 *   get:
 *     summary: Get last 7 days of horoscopes
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns an array of horoscopes for the past 7 days
 *       401:
 *         description: Unauthorized or invalid token
 */
router.get('/history', auth, rateLimiter, getHistory);

module.exports = router;
