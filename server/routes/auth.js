const express = require('express')
const router = express.Router()

router.get('/api/signup', (req, res)=>{
    res.json({
        data: 'You hit signup endpoint'
    });
});