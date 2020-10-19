
// !! Temp Data
const data = require('../../development/seedData/simpleTours.js')

exports.getAllTours = (req, res, next) => {

  res.status(200).json({
    status: 'success',
    results: data.tours.length,
    data: data.tours
  })
}

exports.getTour = (req, res, next) => {

  const id = req.params.id * 1
  
  const tour = data.tours.find(tour => tour.id === id)

  console.log(tour)

  res.status(200).json({
    status: 'success',
    data: tour
  })
}