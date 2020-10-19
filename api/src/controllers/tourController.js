
// !! Temp Data
const data = require('../../development/seedData/simpleTours.js')

exports.getAllTours = (req, res, next) => {

  res.status(200).json({
    status: 'success',
    results: data.tours.length,
    data: data.tours
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