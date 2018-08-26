<template>
    <div class="inputBox shadow">
        <!-- v-model 디렉티브는 input 태그에 입력받은 텍스트 값을 동적으로 바로바로 Vue 인스턴스에 맵핑하는 역할을 수행 -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">custom header</h3>
        </Modal>
    </div>
</template>

<script>
import Model from './common/Model.vue'

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods: {
        addTodo: function() {
            // 모든 컴포넌트는 App.vue에 등록되어있고 App.vue 컴포넌트는 main.js에 등록이 되어있기 때문에
            // 결과적으로 Vue 인스턴스 하나에 등록되므로 this가 최상위 인스턴스를 지칭함
            
            // 로컬스토리지에 저장하는 로직 수행
            // setItem은 Web API 참조문서 MDN 참조
            // setItem('<키>', '<벨류>') 형태로 호출할 수 있음
            // localStorage.setItem(this.newTodoItem, this.newTodoItem);
            // 값이 있을 때만 입력
            if (this.newTodoItem !== '') {
                var obj = {completed: false, item: this.newTodoItem};
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();
            }
        },
        clearInput: function() {
            // 입력 데이터 초기화
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  width: 90%;
  font-size: 0.9rem;
  padding: 0 2%;
  box-sizing: border-box;
}
.addContainer {
  float: right;
  width: 10%;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;;
  box-sizing: border-box;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>