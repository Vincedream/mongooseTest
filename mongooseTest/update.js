/**
 * Created by vince on 2017/7/10.
 */
//引入User的Model
var User = require("./user.js");

function update(){
    //wherestr是我们要进行操作的数据
    var wherestr = {'username' : 'Vince Hua'};
    //update是我们更新的数据
    var updatestr = {'userpwd': 'hhhhhh'};

    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Update Res: " + res);
        }
    })
}

update();