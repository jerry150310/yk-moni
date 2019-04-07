var express = require('express');
var router = express.Router();
const curd = require("mongodb-curd");

/* GET home page. */
router.get('/api/list', function(req, res, next) {
    curd.find("lemon", "bill", function(result) {
        if (result) {
            res.send({ code: 1, msg: "success", data: result })
        } else {
            res.send({ code: 0, msg: "error" })
        }
    })
});

module.exports = router;