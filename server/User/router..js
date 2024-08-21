const express=require('express')
const router=express.Router();
const {saveToWatch}=require('./controller');
const {isAuth} = require('../auth/middlewares');

router.post('/api/saveToWatch', saveToWatch)


module.exports=router