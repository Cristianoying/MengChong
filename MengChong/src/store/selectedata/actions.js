import axios from "axios";
export default{
    handleSelect({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/data"
        }).then((data)=>{
<<<<<<< HEAD:MengChong/src/store/selected/actions.js
            console.log(data.data)
=======
>>>>>>> yangbo:MengChong/src/store/selectedata/actions.js
            commit("handleSelect",data.data);
        })
    }
}