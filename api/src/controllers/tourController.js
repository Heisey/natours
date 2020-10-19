
// !! Temp Data
const data = require('../../development/seedData/simpleTours.js')

exports.getAllTours = (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.status(200).json({
    status: 'success',
    resultAmout: data.tours.length,
    results: data.tours
  })
}

exports.createTour = (req, res, next) => {

  res.status(201).json({
    status: 'success',
    data: 'I love puppies'
  })
}

exports.getTour = (req, res, next) => {

  const id = req.params.id * 1
  
  const tour = data.tours.find(tour => tour.id === id)

  res.status(200).json({
    status: 'success',
    data: tour
  })
}