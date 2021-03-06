export default {
    //点击搜索框，查询到热门标签和个人历史记录
    getBeforHottagAndHisearch(state, params) {
        state.beforHottagAndHisearch = params;
    },
    //查询相关商品列表  狗
    getDogGoodsList(state, params) {
        state.dogGoodsList = [...state.dogGoodsList, ...params.dogGoodsList];
    },
    //查询相关商品列表  猫
    getCatGoodsList(state, params) {
        state.catGoodsList = [...state.catGoodsList, ...params.catGoodsList];
    },
    //查询相关商品列表  食物
    getPetFoodGoodsList(state, params) {
        state.petFoodGoodsList = [...state.petFoodGoodsList, ...params.petFoodGoodsList];
    },
    //搜索列表相关商品
    getGoodsByName(state, params) {
        //state.goodsList = [...state.goodsList, ...params.search]
        state.goodsList = params.search
    },
    //获取吸顶的高度
    getOffsetTop(state, params) {
        state.getOffsetTop = params
    },
    //记录进入搜索页面的路由
    searchPageFromRouter(state, params) {
        state.searchPageFromRouter = params
    },
    getPetDetails(state,params){
        console.log(params)
        if(params.dogName){
            state.goodsDetails.name = params.dogName;
            state.goodsDetails.img = params.dogPhoto;
            state.goodsDetails.price = params.dogPrice;
        }else if(params.catName){
            state.goodsDetails.name = params.catName;
            state.goodsDetails.img = params.catPhoto;
            state.goodsDetails.price = params.catPrice;
        }else if(params.foodName){
            state.goodsDetails.name = params.foodName;
            state.goodsDetails.img = params.foodPhoto;
            state.goodsDetails.price = params.foodOrigPrice;
        }
        console.log(state.goodsDetails)
    }
}