<template>
    <div>
        <ul>
            <!-- propsdata 순회하며 todoItem을 렌더-->
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                v-on:click="toggleComplete(todoItem, index)"></i>
                <!-- todoItem의 completed 속성에 따라 동적으로 class를 지정 -->
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
// TodoList 컴포넌트에서는 표현 위주로 동작하고 실제 이벤트 처리는 최상위 App 컴포넌트에서 처리하도록 리팩토링
export default {
    methods: {
        removeTodo(todoItem, index) {
            // 상위 컴포넌트로 삭제 이벤트 전달
            // this.$emit('removeItem', todoItem, index);
            
            // mutations 적용
            const item = {todoItem, index}
            this.$store.commit('removeOneItem', {todoItem, index});
        },
        toggleComplete(todoItem, index) { 
            // this.$emit('toggleItem', todoItem, index);

            // mutaions 적용
            const item = {todoItem, index}
            this.$store.commit('toggleOneItem', {todoItem, index});
        },
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #ffffff;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #adadad;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
    padding-right: 10px;
    cursor: pointer;
}
.checkBtnCompleted {
    color: #b3adad;
    cursor: pointer;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
