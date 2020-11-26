const mongoose = require('mongoose')

const sensorSchema = mongoose.Schema({
    brave: {
        type: String,
        required: true
    },
    canvas: {
        type: Object,
        required: true
    },
    document: {
        type: Object,
        required: true
    },
    fmh: {
        type: String,
        required: true
    },
    fonts: {
        type: String,
        required: true
    },
    fonts_optm: {
        type: String,
        required: true
    },
    fpValstr: {
        type: String,
        required: true
    },
    mr: {
        type: String,
        required: true
    },
    navigator: {
        type: Object,
        required: true
    },
    np: {
        type: String,
        required: true
    },
    other: {
        type: Object,
        required: true
    },
    performance: {
        type: Object,
        required: true
    },
    rCFP: {
        type: String,
        required: true
    },
    screen: {
        type: Object,
        required: true
    },
    ssh: {
        type: String,
        required: true
    },
    weh: {
        type: String,
        required: true
    },
    window: {
        type: Object,
        required: true
    },
    wl: {
        type: Number,
        required: true
    },
    wr: {
        type: String,
        required: true
    },
    wv: {
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('Sensor', sensorSchema)