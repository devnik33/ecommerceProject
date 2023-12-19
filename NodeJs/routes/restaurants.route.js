
const restaurantControllers=require('../controllers/restaurant.controller')
module.exports=(app)=>{
    app.post('/api/restaurants',restaurantControllers.create);
    app.get('/api/restaurants',restaurantControllers.fetch);
    app.get('/api/restaurants/:id',verifyToken,restaurantControllers.fetchOne);
    app.put('/api/restaurants/:id',restaurantControllers.updateOne);
    app.delete('/api/restaurants/:id',restaurantControllers.deleteOne);
}