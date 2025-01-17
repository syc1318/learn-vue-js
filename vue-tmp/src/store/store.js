import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage={
   fetch(){
      const arr=[];
      if(localStorage.length >0){
         for(let i =0; i<localStorage.length;i++){
            if(localStorage.key(i) !== 'loglevel:web-dev-server'){
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
         }
      }
      return arr;  
   }
}
export const store = new Vuex.Store({
   // 
   state:{
      todoItems: storage.fetch()
   },
   mutations:{
      addOneItem(state,todoItem){
         const obj = {completed: false, item:todoItem};
         localStorage.setItem(todoItem, JSON.stringify(obj)); //JSON.stringfy = 자바스크립트를 스트링으로 바꿔주는?
         state.todoItems.push(obj)
       },
       removeOneItem(state, payload){
         localStorage.removeItem(payload.todoItem.item);
         state.todoItems.splice(payload.index, 1);
      },
      toggleOneItem(state, payload){
         // todoItem.completed = !todoItem.completed;
         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
         localStorage.removeItem(payload.todoItem.item);
         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
       },
       clearAllItems(state){
         localStorage.clear();
         state.todoItems=[];
       }
   }
});