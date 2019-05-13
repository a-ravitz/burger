var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
          cb(res);
        });
      },
    updateOne: function(devoured, id, cb) {
      orm.updateOne(devoured, id, function(res) {
        cb(res);
      });
    
    },
    deleteOne: function(id, cb) {
      orm.deleteOne(id, function(res) {
        cb(res)
      })
    }

}

module.exports = burger;