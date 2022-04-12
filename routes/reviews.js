const express = require('express')
const catchAsync = require('../utils/catchAsync');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn } = require('../middleware')
const reviews = require('../controllers/reviews')


router.post('/', validateReview, isLoggedIn, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, catchAsync(reviews.deleteReview))

module.exports = router;