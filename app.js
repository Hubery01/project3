const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const qs = require('qs');
var upload = multer({dest:'upload/'})
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:"",
    database:'music'
});
var server = express();
server.listen(3000);
server.use(express.static('public'))
// 1.获取轮播
server.get('/music_swiper',(req,res)=>{
    var sql = 'select sid,img_url from music_swiper'
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send({code:1,data:result})
    })
})
// 2.grid
server.get('/music_grid',(req,res)=>{
    var sql = 'select id,family_id,img_url,title from grid'
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})
// 3.mv
server.get('/video',(req,res)=>{
  var sql = 'select id,url,title,count from video'
  pool.query(sql,(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
// 4.yueku
server.get('/yueku',(req,res)=>{
  var fid = req.query.family_id
  var sql = 'select id,family_id,name,singer,mp3,pic_url from yueku where family_id=?'
  pool.query(sql,[fid],(err,result)=>{
    if(err)throw err
    res.send({code:1,data:result})
  })
})
