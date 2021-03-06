'use strict';

const express = require('express');
const router = express.Router();
//引入控制器模块
let userControllers = require('./controllers/userController.js');
let articalControllers = require('./controllers/articalController.js');
let commentControllers = require('./controllers/commentController.js')

//设置主页面请求处理
// router.get('/',(req,res,next)=>{
//     userControllers.showIndex(req,res,next);
       //由于这里嵌套的两个函数所传递的参数一样，所以可以合并起来
// })

// router.get('/',userControllers.showIndex)//还可以链式编程 
router.get('/',articalControllers.getPage)//  到了要动态渲染文章的阶段就要重新设置了
.get('/register',userControllers.showRegister) //显示注册页面
.post('/doRegister',userControllers.doRegister) //注册处理
.get('/active',userControllers.doActive) //激活处理
.post('/login',userControllers.doLogin) //登录处理
.get('/showLogin',userControllers.showLogin)  //显示登录页面
.get('/logout',userControllers.doLogout)//退出
.get('/getPicture',userControllers.getPicture) //获取验证码图片
.get('/showSetting',userControllers.showSetting) // 显示设置用户界面
.post('/uploadPic',userControllers.uploadPic) //上传图片处理
.post('/doSetting',userControllers.doSetting) //保存设置处理
.get('/publishArticle',articalControllers.showPublish)  //显示文章发布页面
.post('/saveArticle',articalControllers.saveArticle)  //提交并保存文章信息
.get('/getPage',articalControllers.getPage)  //处理文章显示分页问题
.post('/searchArticle',articalControllers.searchArticle) //处理搜索框点击请求
.get('/searchArticle',articalControllers.searchArticle) //处理搜索分页，页标点击请求处理
.get('/showArticle/:aid',articalControllers.showArticle)   //显示文章详情页面
.post('/sendComment',commentControllers.saveComment)   //保存文章评论处理
module.exports = router;