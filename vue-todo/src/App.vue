<template>
<!-- 기본적인 스캐폴딩 shortcut(Vetur) scf -->
  <div class="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:<하위 컴포넌트에서 발생시킨 이벤트 이름>="현재 위치의 컴포넌트의 메서드 이름" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-bind:<내려보낼 프롭스 속성 이름>="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addOneItem(todoItem) {
      // const의 특성상 오버라이딩이 안되기 때문에 비교적 안전한 프로그래밍을 위해 let 대신 const로 할당
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      // localStorage의 todoItem.item 삭제
      localStorage.removeItem(todoItem.item);
      // splice는 자바스크립트 배열 API로 특정 <index>에서 <개수>를 지울 수 있음
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // 최상위 컴포넌트에서는 컨테이너의 성격을 가지고 있기 때문에 최상위 컴포넌트 내에 data로 접근하는 것이 좋음
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // localStorage API는 update가 없기 때문에 삭제하고 다시 저장해야 한다
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  // Vue 라이프 사이클 중 생성되자마자 호출되는 훅
  created() {
      // localStorage에 item이 있을 경우(길이가 0보다 큰 경우)
      if (localStorage.length > 0) {
          // localStorage를 순회하며 loglevel:webpack-dev-server가 아닌 아이템들을 todoItems 배열에 푸시
          // 매 loop 마다 i의 값은 변해야하기 떄문에 let으로 선언(ES6)
          for (let i = 0; i < localStorage.length ; i ++) {
              if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  // this.todoItems.push(localStorage.key(i));
                  // 넣을 땐 JSON.stringify(), 꺼낼 땐 JSON.parse()
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
