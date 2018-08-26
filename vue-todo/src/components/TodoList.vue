<template>
    <div>
        <ul>
            <!-- todoItems를 순회하며 todoItem을 렌더-->
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
                {{ todoItem }}
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
    },
    // Vue 라이프 사이클 중 생성되자마자 호출되는 훅
    created: function() {
        // localStorage에 item이 있을 경우(길이가 0보다 큰 경우)
        if (localStorage.length > 0) {
            // localStorage를 순회하며 loglevel:webpack-dev-server가 아닌 아이템들을 todoItems 배열에 푸시
            for (var i = 0; i < localStorage.length ; i ++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style>
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
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
