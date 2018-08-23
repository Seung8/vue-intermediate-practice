<template>
    <div>
        <ul>
            <!-- todoItems를 순회하며 todoItem을 렌더-->
            <li v-for="todoItem in todoItems" v-bind:key="todoItem">
                {{ todoItem }}
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

</style>
