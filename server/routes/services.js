const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller');

router.get("/services", servicesController.getAllServices);
router.get("/services/search", servicesController.searchServices);
router.get("/services/:id", servicesController.getServiceById);
router.get('/subcategory/:id', servicesController.getServicesBySubcategoryId);
router.post("/service", servicesController.createService);
router.put("/services/:id", servicesController.updateService);
router.delete("/services/:id", servicesController.deleteService);

module.exports = router;
  