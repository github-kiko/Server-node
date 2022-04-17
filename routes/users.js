var express = require('express');
var router = express.Router();
// const { User } =require("../model/User")



// get请求
router.get('/', function (req, res, next) {
  console.log("get:",req.query);
  res.send({
    code: 0,
    data: [{
      'name': '东东吖',
      'age': 24,
      'city': '深圳'
    }, {
      'name': '王昭君',
      'age': 23,
      'city': '北京'
    },
    {
      'name': '妲己',
      'age': 24,
      'city': '上海'
    },
    {
      'name': '小鲁班',
      'age': 22,
      'city': '广州'
    },
    {
      'name': '孙悟空',
      'age': 25,
      'city': '贵阳'
    },
    ]
  }


  );
});

// post请求
router.post('/add', async(req, res, next)=> {
  const { name, age, city } = req.body
  if (!(name && age && city)) {
    res.send('参数错误!')
    return
  }
  console.log("接收到的参数：",req.body);
  res.send({
    code: 0,
    msg: '添加成功'
  })
});


// put请求
router.put('/emit', function (req, res, next) {
  const {id, name, age, city } = req.body
  if (!(id&&name && age && city)) {
    res.send('参数错误!')
    return
  }
  console.log("接收到的参数：",req);
  res.send({
    code: 0,
    msg: '修改成功'
  }
  );
});


// delete请求
router.delete('/del', function (req, res, next) {
  const {id} = req.body
  if (!id) {
    res.send('参数错误!')
    return
  }
  console.log("接收到的参数：",req);
  res.send({
    code: 0,
    msg: '删除成功'
  }
  );
});









module.exports = router;
