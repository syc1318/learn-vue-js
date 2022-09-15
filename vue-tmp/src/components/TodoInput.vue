<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">add</button>
    <span class="addContainer">
        <i class="fas fa-plus addBtn"></i>
    </span>
    <AModal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            경고!
            <button class="closeModalBtn" @click="showModal=false">X</button>
        </h3>
        <h3 slot="body">
            비어있습니다.
        </h3>
        <h3 slot="footer">
            copyright
        </h3>
    </AModal>
  </div>
</template>

<script>
import AModal from './common/AModal.vue';
export default {
    data(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods:{
        addTodo(){
            if(this.newTodoItem !==''){
                // this.$emit('이벤트 이름',인자1,인자2,...);
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                // this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem='';
        }
    },
    components:{
        AModal
    }
}
</script>

<style scoped>
input:focus{
    outline:none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background:linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
.closeModalBtn{
    color:#42b983;
}
</style>