<template>
    <div>
        <ul>
            <!-- todoItems를 순회하며 todoItem을 렌더-->
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
                <!-- todoItem의 completed 속성에 따라 동적으로 class를 지정 -->
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem);
            // splice는 자바스크립트 배열 API로 특정 <index>에서 <개수>를 지울 수 있음
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem, index) { 
            todoItem.completed = !todoItem.completed;
            // localStorage API는 update가 없기 때문에 
            // 삭제하고 다시 저장해야 한다
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
