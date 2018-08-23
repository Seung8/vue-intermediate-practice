<template>
    <div>
        <!-- v-model 디렉티브는 input 태그에 입력받은 텍스트 값을 동적으로 바로바로 Vue 인스턴스에 맵핑하는 역할을 수행 -->
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">add</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: "",
        }
    },
    methods: {
        addTodo: function() {
            // 모든 컴포넌트는 App.vue에 등록되어있고 App.vue 컴포넌트는 main.js에 등록이 되어있기 때문에
            // 결과적으로 Vue 인스턴스 하나에 등록되므로 this가 최상위 인스턴스를 지칭함
            console.log(this.newTodoItem);
            
            // 로컬스토리지에 저장하는 로직 수행
            // setItem은 Web API 참조문서 MDN 참조
            // setItem('<키>', '<벨류>') 형태로 호출할 수 있음
            localStorage.setItem(this.newTodoItem, this.newTodoItem);

            // 입력 데이터 초기화
            this.newTodoItem = '';
        }
    }
}
</script>

<style>

</style>
