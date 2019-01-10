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
  }
}
