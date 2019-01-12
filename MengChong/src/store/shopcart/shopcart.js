import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'

let state = {
  cartGoodsList: [],
  orderlist: [],
  checkall: true,
  recemsg:{},
  from_c:''
};
let actions = {
  //获取购物车列表数据
  handleGetcartlist({commit}) {
    axios({
      method: 'post',
      url: '/api/mock/5c36a13f84f3a332095b67d1/cart/getList'
    }).then((data) => {
      data.data.cartGoodsList.map((item) => {
        item.flag = true;
      });
      commit('handleGetcartlist', data.data.cartGoodsList);
    })
  },
  //删除所选
  handledeletechecked({state, dispatch}) {
    let dellist = [];
    let indexlist = [];
    state.cartGoodsList.map((item) => {
      if (item.flag) {
        dellist.push(item.goodsId);
      }
    });
    axios({
      method: 'post',
      url: '/api/cart/delete',
      data: {
        ids: dellist
      }
    }).then((result) => {
      console.log(result);
      if (result.code === 1000) {
        dispatch("handleGetcartlist");
      }
    })
  },
  //点击加号或者减号对商品的数量进行增加或者减少
  handleaddorsub({state, dispatch}, obj) {
    if (obj.opt === 0) {
    } else {
      if (state.cartGoodsList[obj.index].goodsCount === 1) {
        alert('不能再减少了！');
        return;
      }
    }
    axios({
      type: 'post',
      url: '/api/cart/addOrSub',
      data: {
        id: obj.id,
        opt: obj.opt
      }
    }).then(data => {
      if (data.code === 1000) {
        dispatch("handleGetcartlist");
      }
    }).catch(data => {
      alert('操作失败');
    })
  }
};

let mutations = {
  //获取购物车列表数据
  handleGetcartlist(state, val) {
    state.cartGoodsList = val;
  },
  //全选的选中与取消
  handlechangeallstate(state) {
    state.checkall = !state.checkall;
    state.cartGoodsList.map((item) => {
      item.flag = state.checkall;
    })
  },

  //选中单个或取消选中
  changesinglestate(state, index) {
    state.cartGoodsList[index].flag = !state.cartGoodsList[index].flag;
    let allchecked = true;
    state.cartGoodsList.map(item => {
      if (item.flag === false) {
        allchecked = false;
        state.checkall = allchecked;
      }
    });
    state.checkall = allchecked;
  },
//将选中的物品添加到orderlist中
  handleaddorderlist(state) {
    state.orderlist = [];
    state.cartGoodsList.map(item => {
      if (item.flag) {
        state.orderlist.push(item);
      }
    })
  }
,
  //记录来的路由
  handlesetfrom(state,val){
    state.from_c = val;
  }
};
let getters = {
  getcountallmoney(state) {
    let countallmoney = 0;
    state.cartGoodsList.map((item) => {
      if (item.flag) {
        countallmoney += item.goodsCount * item.goodsPrice;
      }
    });
    return countallmoney;
  }
};
const store = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
export default store;
