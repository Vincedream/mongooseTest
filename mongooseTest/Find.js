/**
 * Created by vince on 2017/7/10.
 */
var User = require('./user');
function findByConditions() {
    var wherestr = {'username' : 'Mike Guo'};
    User.find(wherestr,function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Find Res: " + res);
        }
    });
}
findByConditions();