
import axios from "axios";
export default {
    handleTopic({commit}){
        axios({
            method:"get",
            url:"/api/topic/getAll",
        })
        .then((data)=>{    
            commit("handleTopic",data.data.data);
        })
    },

  
    handleTimeList({commit}){
        axios({
            method:"get",
            url:"/api/goods/bargain/page",
        })
        .then((data)=>{
            commit("handleTimeList",data.data.data);
        })
    },
    //请求动态详情
    handleDongTai({commit}){
        // axios({
        //     method:"get",
        //     url:"/api/dynamic/mine/getAll",
        // })
        // .then((data)=>{
        //     console.log(data.data.data,333333);
        //     //commit("handleDongTai",data.data);
        // })
    },
    handleTopicList({commit}){
        axios({
            method:"get",
            url:"/api/topic/getAll",
        })
        .then((data)=>{  
            commit("handleTopicList",data.data.data);
        })

    },
    // handleTopicList
    //请求话题动态列表
    //https://www.easy-mock.com/mock/5c370dfcf93efc493ce9c7ca/example/dynamic/getTopicBytopicId
    topicUserList({commit}){
        axios({
            method:"post",
            url:"/api/dynamic/getTopicBytopicId",
            data:{
                topicId:1
            }
        })
        .then((data)=>{
            commit("topicUserList",data.data.data);
        })
    },


    personInfoHandle({commit},val){
        axios({
            method:"post",
            url:"/api/getMineInfoByuserId",
            data:{
               userId:val
            }
        })
        .then((data)=>{
            commit("personInfoHandle",data.data.data);
        })
     
    }
}