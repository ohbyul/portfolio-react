export const requiredValueCheck = (param,type) => {
    for (const [key, value] of Object.entries(param)) {

        // console.log(param);
        // console.log(`${key} : [${value}]`);
        
        if(!unRequiredKey.includes(key)){
            if(value ===undefined || value === null || String(value).replaceAll(' ','') === '' ){
                return {id: key, msg: `${transKey(key)}을 입력해주세요.`};
            }
        }
    }
}

const unRequiredKey = [ 
    'files' , 'id'
    // 회원가입
    , 'department' , 'position' , 'job' , 'officePhoneNo' , 'emailReceiveYn' , 'smsReceiveYn' , 'service' , 'privacy','requiredValueCheck'
    ,'approvalLoginId','approvalDtm', 'email',
]


export const transKey = (key) => {
    const keys = [
        { key : 'postClassificationCd' , value : '분류' },
        { key : 'title' , value: '제목'},
        { key : 'contents' , value : '내용' },

        { key : 'memberNm' , value : '성명' },
        { key : 'birth'    , value : '생년월일'},
        { key : 'gender'   , value : '성별'},
        { key : 'memberId' , value : '아이디' },
        { key : 'mobileNo' , value : '휴대폰 번호' },
        { key : 'memberPwdPre' , value : '기존 비밀번호' },
        { key : 'memberPwd' , value : '비밀번호' },
        { key : 'memberPwdChk' , value : '비밀번호 확인' },

        { key : 'zipCode' , value : '주소'},
        { key : 'addressDetail' , value: '상세주소'},
        { key : 'service' , value : '서비스 이용약관' },
        { key : 'privacy' , value : '개인정보 이용약관' },
    ]
    let result = keys.find(item => item.key === key )
    if(result){
        return result.value
    }else{
        return '필수값'
    }
}