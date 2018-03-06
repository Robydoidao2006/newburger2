var orm = require("../config/orm.js");

var burger = {
    //display all values 
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        })
    },
    //updates burger status
    updateOne: function(id, callback){
        orm.updateOne("burgers", id, callback);
    },

    //create a new burger
    insertOne: function(name, callback){
        orm.insertOne("burgers", name, callback);        
    }
}


module.exports = burger;