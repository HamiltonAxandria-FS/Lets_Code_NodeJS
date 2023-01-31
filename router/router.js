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

// http://localhost:3000/exercise/34
router.get("/:id", (req,res,next)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Successfull - GET by id",
        id: "id",
        metadata: {
            hostname: req,hostname,
            method: req.method
        },
    });
});
module.exports = router;