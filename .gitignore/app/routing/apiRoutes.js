var people = require("");


module.exports = function(app) {


    app.post("", function(req, res) {   //stuck here///
        res.json(people);
    });
  };


