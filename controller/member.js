const {conn} = require('../util/database');
const db = conn.promise();
const TB_CM_CMUT = require('../models/Community/TB_CM_CMUT');

const mybatisMapper = require('mybatis-mapper');
const format = {language: 'sql', indent: '  '};

mybatisMapper.createMapper(['./helper/member.xml'])

const test = new TB_CM_CMUT(1,10,'농구모임')


exports.getMyCm = (req,res,next) => {
    




}



exports.getMembers = async (req, res, next)=>{

    const param = {
        test1 : 'CMUT_NM',
        test2 : test.CMUT_NM
    }
    try{
    const query = mybatisMapper.getStatement('memberBatis', 'getAllCommunity', param, format);
    const result = await db.query(query);
    res.send(result[0])
    }catch(err){
        next(err)
    }
}

exports.insertCommunity = async (req, res, next)=>{
    const cnum = req.body.cnum;
    const mnickname = req.body.mnickname;
    const status = '10';

    const param = {
        cnum : cnum,
        mnum : req.user.MEM_NO,
        mname : req.user.MEM_NM,
        mnickname : mnickname,
        profilepath : req.user.PRF_IMG_PATH,
        statuscode: status
    }

    try{
        const query = mybatisMapper.getStatement('memberBatis', 'insertCommunity', param, format);
        const result = await db.query(query);
        res.send(result[0])
    }catch(err){
        next(err)
    }
}
