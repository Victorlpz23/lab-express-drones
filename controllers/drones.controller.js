const Drone = require('../models/Drone.model');



module.exports.list = (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    }) 
    .catch((console.error()))
};

module.exports.create = (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
};

module.exports.doCreate = (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
};

module.exports.update =(req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
};


module.exports.doUpdate =(req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
};

module.exports.delete = (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
};