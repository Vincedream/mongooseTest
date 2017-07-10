/**
 * Created by vince on 2017/7/10.
 */
//引如User的Model
var User = require('./user');

//创建一个插入数据到数据库中的函数

function insert() {

    //用Model创建一个Entity实体，就是一个User的数据
    var user_1 = new User({
        username: 'Vince Hua',
        userpwd: '123456',
        userage: 20,
        logindate: new Date()
    });

    //调用user_1的save方法，插入user_1的数据到数据库中
    user_1.save(function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Success Res: " + res)
        }
    });
}
//执行插入操作
insert();