var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
const bikash = require('../models/firstmodel');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });



router.post("/add", (req, res, next) => {

    // let newStudent = new bikash1({
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     age: req.body.age,
    //     dob: req.body.firstname,

    // })

    let newStudent = new bikash({
        firstname: "vishal",
        lastname: "dey",
        age: 26,
        dob: "1995",

    })
    newStudent.save(function(err, newStudent) {

        if (err)
            res.send(err);
        else
            res.send(newStudent)

    })

});

module.exports = router;