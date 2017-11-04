var express=require("express");
var router=express.Router();
var fs=require('fs');
var PATH='./public/data/';

//读取数据模块，供客户端调用
//查询接口，token校验
//公开接口，无需校验

router.get('/read',function (req,res,next) {
    var type=req.param('type')||'';
    fs.readFile(PATH+type+'.json',function (err,data) {
        if(err){
          return res.send({
              status:0,
              info:"读取文件出现异常"
          });
        }
        //读取消息数目
        var COUNT=50;

        var obj=[];
        try {
          obj=JSON.parse(data.toString());
        }catch(e) {
          obj=[];
        }
        if(obj.length>COUNT){
          //arrayObject.slice(start,end).slice() 方法可从已有的数组中返回选定的元素。
          obj=obj.slice(0,COUNT);
        }
        return res.send({
            status:1,
            data:obj
        });
    });
});

//数据存储模块，后台开发使用
router.post('/write',function (req,res,next) {
    if(!req.session.user){
      return res.send({
          status:0,
          info:'未鉴权认证！'
      });
    }
    //文件名
    
})

module.exports = router;
