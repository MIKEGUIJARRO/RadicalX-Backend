const { Router } = require('express');

const router = Router();

router.get('/description', (req, res, next)=> {
    res.status(200).json({
        success: true,
        endpoint: 'description'
    });
});

router.get('/guide', (req, res, next)=> {
    res.status(200).json({
        success: true,
        endpoint: 'guide'
    });
});

router.get('/surveys', (req, res, next)=> {
    res.status(200).json({
        success: true,
        endpoint: 'surveys'
    });
});

router.get('/settings', (req, res, next)=> {
    res.status(200).json({
        success: true,
        endpoint: 'settings'
    });
});

module.exports = router