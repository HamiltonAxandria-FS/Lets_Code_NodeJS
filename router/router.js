const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

// http://Localhost:3000/exercise
router.get("/", (req,res, next)=>{
res.status(200).json({
    message: "Successful - GET",
    metadata: {
        hostname: req.hostname,
        method: req.method,
     },
    });
});

// Localhost:3000/exercise/23
router.get('/:id', (req, res) => { 
    const id = req.params.id;
    res.status(200).json({
        message: "Successful - GET by id",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        },
    });
});

// http://localhost:3000/exercise
router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'Successful - POST',
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// http://localhost:3000//exercise/89
router.patch('/:id', (req,res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Successful - PATCH by id",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        },
    });
});

// http://localhost:3000/exercise/9
router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Successful - Delete by id",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        },
    });
});
module.exports = router;