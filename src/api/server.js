const { Router } = require('express');
const internshipRoutes = require('./components/internship/routes');

const router = Router();
router.use('/internship', internshipRoutes);

module.exports = router;