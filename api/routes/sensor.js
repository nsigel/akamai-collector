const { response } = require('express');
const express = require('express')  
const router = express.Router();
const mongoose = require('mongoose')
const Sensor = require('../models/sensorModel')

router.post('/collect', async (req, res) => {
    
    try {
        var sensor = new Sensor(req.body)
        sensor.save()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(500).json({error: error})
            });
    } catch(error) {
        res.status(500).json({
            error: error
        })
    }

}) 

router.get('/total', async (req, res) => {
    try {
        Sensor.countDocuments({}, function(err, count){
            res.status(200).json({count: count});
        });
    } catch(error) {
        console.log(error)
    }
});


module.exports = router;