  
// ?????????????????????????????????????????????????????????
// ??????????????????? Tour Router ?????????????????????????
// ?????????????????????????????????????????????????????????


// ??????????????????? File Modules ????????????????????????
// ?? Controllers
const tourController = require('../controllers/tourController.js')

// ??????????????????? Vendor Modules ??????????????????????
const express = require('express')

// ~~ Create Router for Tours
const router = express.Router();
module.exports = router;

// ~~ Tours Root Route
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour)

router
  .route('/:id')
  .get(tourController.getTour)