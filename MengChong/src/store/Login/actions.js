import axios from '../../axios/index'
export default {
  loginActions({commit},params){
//console.log(params);
    console.log(params);
    axios({
      method:"post",
      url:'api/user/register',
      data:{
        userTel:params.username,
        userPass:params.userpass,
        vcode:params.verificationCode
      }
    }).then((data)=>{
      console.log(data);
    })

  }
}
