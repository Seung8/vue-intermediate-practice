<template>
<!-- 기본적인 스캐폴딩 shortcut(Vetur) scf -->
  <div class="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:<하위 컴포넌트에서 발생시킨 이벤트 이름>="현재 위치의 컴포넌트의 메서드 이름" -->
    <TodoInput></TodoInput>
    <!-- v-bind:<내려보낼 프롭스 속성 이름>="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
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
