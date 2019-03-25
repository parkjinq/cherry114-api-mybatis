class TB_CM_CMNT_REL {
    constructor(CMUT_NO, REL_CMUT_NO, REL_TP_CD, FST_REG_DTTM, 
        FST_REG_USID, LST_CH_DTTM, LST_CH_USID
        ){
        this.CMUT_NO = CMUT_NO
        this.REL_CMUT_NO = REL_CMUT_NO
        this.REL_TP_CD = REL_TP_CD
        this.FST_REG_DTTM = FST_REG_DTTM
        this.FST_REG_USID = FST_REG_USID
        this.LST_CH_DTTM = LST_CH_DTTM
        this.LST_CH_USID = LST_CH_USID
    }
}

module.exports = TB_CM_CMNT_REL