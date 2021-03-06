export default {
  getmineInfoMutations(state,payload){
    state.mine_info_d=payload;
  },
  getCommentAllMutations(state,payload){
    state.commentlist_d=payload
  },
  getLikeAllMutations(state,payload){
      state.likeList_d=payload
  },
  getPetInfoMutations_d(state,payload){
    state.petinfo_d=payload;
  },
  getAllPetFriendListMutations_d(state,payload){
    state.petfriendlist_d=payload;
  },
  getOrderListMutations_d(state,payload){
    state.orderlist_d=payload;
  },
  getOrderDetailInfoMutations_d(state,payload){
    var orderlist_detail_d=state.orderlist_d.find(v=>v.orderId=payload);
    state.orderlist_detail_d=orderlist_detail_d
  },
  getPersonalInfoMutations_d(state,payload){
    state.personalInfo_d=payload;
  },
  getReceiveListMutations_d(state,payload){
    state.recemg_d=payload
  },
  changePlaceIndexMutation_d(state,payload){
    console.log(state.placeIndex_d,"before");
    state.placeIndex_d=payload
    console.log(state.placeIndex_d,"after")
  }
}
