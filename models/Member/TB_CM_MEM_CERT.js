class TB_CM_MEM_CERT {
    constructor(NEN_NO, CERT_TP_CD, CERT_TP_SEQ, CERT_ID_VAL, CERT_VF_VAL, ENC_TP_NM,
        ENC_VAL, FAIL_CNT, LAST_VF_DTTM
        ){
        this.NEN_NO = NEN_NO
        this.CERT_TP_CD = CERT_TP_CD
        this.CERT_TP_SEQ = CERT_TP_SEQ
        this.CERT_ID_VAL = CERT_ID_VAL
        this.CERT_VF_VAL = CERT_VF_VAL
        this.ENC_TP_NM = ENC_TP_NM
        this.ENC_VAL = ENC_VAL
        this.FAIL_CNT = FAIL_CNT
        this.LAST_VF_DTTM = LAST_VF_DTTM
    }

}

module.exports = TB_CM_MEM_CERT
