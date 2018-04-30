
var addFriends = require("../App/data/friends");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(addFriends);
        res.json(true);
    });
    app.post("/api/addFriends", function(req, res) {
  
        addFriends.push(req.body);
    });


}