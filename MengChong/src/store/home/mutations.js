export default {
    handleTopicList(state,params){
        let m1=params.topicList.splice(0,3);
        state.topic_w=m1;
        let m2=params.topicList.splice(0,5);
        state.topic_index_w=m2;
    },
    handleTimeList(state,params){
        state.time_w=params.petFoodGoodsList;
    }
}