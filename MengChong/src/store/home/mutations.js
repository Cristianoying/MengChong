export default {
    handleTopic(state,params){
        state.topic_w=params;
    },
    handleTimeList(state,params){      
        state.time_w=params.petFoodGoodsList;
    },
    handleTopicList(state,params){
        state.topic_index_w=params;
    },
    handleDongTai(state,params){
        state.topic_list_w=params.dynList;
    },
    topicUserList(state,params){
        state.topicUserList_w=params.topicComList;
        console.log(state.topicUserList_w);
    },
    personInfoHandle(state,params){
        state.personInfo=params;
        console.log(state.personInfo);
    }
}