import axios from 'axios'
export default {
  loginActions({commit},params){
//console.log(params);
    console.log(params);
    axios({
      method:"post",
      url:'api/user/register',
      data:{
        userTel:params.username,
        userPass:params.password,
        vCode:params.verificationCode
      }
    }).then((data)=>{
      if(data.code===1000){
        console.log("注册成功");
      }
    })

  }
}
