<template>
<!-- 기본적인 스캐폴딩 shortcut(Vetur) scf -->
  <div class="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:<하위 컴포넌트에서 발생시킨 이벤트 이름>="현재 위치의 컴포넌트의 메서드 이름" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-bind:<내려보낼 프롭스 속성 이름>="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      // localStorage의 todoItem.item 삭제
      localStorage.removeItem(todoItem.item);
      // splice는 자바스크립트 배열 API로 특정 <index>에서 <개수>를 지울 수 있음
      this.todoItems.splice(index, 1);
    },
  },
  // Vue 라이프 사이클 중 생성되자마자 호출되는 훅
  created: function() {
      // localStorage에 item이 있을 경우(길이가 0보다 큰 경우)
      if (localStorage.length > 0) {
          // localStorage를 순회하며 loglevel:webpack-dev-server가 아닌 아이템들을 todoItems 배열에 푸시
          for (var i = 0; i < localStorage.length ; i ++) {
              if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  // this.todoItems.push(localStorage.key(i));
                  // 넣을 땐 JSON.stringify(), 꺼낼 땐 JSON.parse()
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
