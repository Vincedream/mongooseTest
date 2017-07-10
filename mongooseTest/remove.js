/**
 * Created by vince on 2017/7/10.
 */
var User = require("./user");

function del() {
    //需要删除的数据
    var wherestr = {'username' : 'Vince Hua'};

    User.remove(wherestr,function (err, res) {
        if(err){
            console.log("Error: " + err)
        }else{
            console.log("Success Remove: " + res);
        }
    })
}

del();