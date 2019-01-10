export default {
    reindex(state,index){
     
    if(index==2){   
         var strhref = location.href;
          state.statusflag = true; 
          state.strindex = strhref.split("/")[4];
         
          location.href = "http://localhost:8080/#/publish"
      } 
  },
    cancleindex(state){
      state.statusflag = false;


    }
  }