var connection = require("./connection");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers"
        connection.query(queryString, function(err, data) {
          if (err) throw err;
          cb(data);
        });
    },
    insertOne: function(burger_name, cb) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)'
        connection.query(queryString, [burger_name], function(err, data) {
            if (err) throw err;
            cb(data)
        })
    },
    updateOne: function(devoured, id, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"
        connection.query(queryString, [devoured, id], function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    deleteOne: function(id, cb) {
        var queryString = "DELETE FROM burgers WHERE id = ?"
        connection.query(queryString, [id], function(err, data) {
            if (err) throw err;
            cb(data)
        })
    }
    
}
module.exports = orm;