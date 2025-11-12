var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hw5');
});

/* Post handler. Page that has a table containing the form data submitted, 
and the same form found in hw5-work.html, including its CSS data, 
but not including the "Homework 5" header */
router.post('/', function(req, res, next) {
  const formData = req.body;
  /* Normalize the values to arrays */
  Object.keys(formData).forEach(key => {
    if (!Array.isArray(formData[key])) {
      formData[key] = [formData[key]];
    }
  });
  res.render('hw5result', { formData: formData });
});

module.exports = router;
