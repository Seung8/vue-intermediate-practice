import Vue from 'vue'
import Vuex from 'vuex'

// use메서드는 Vue의 플러그인 기능으로 Vue를 사용할 때 전역(global functionality)으로 특정 기능을 추가하고 싶은 때 사용
Vue.use(Vuex);

const storage = {
    // 로컬 스토리지의 데이터를 가져와 배열로 돌려주는 속성
    fetch() {
        const arr = [];
        // Vue 라이프 사이클 중 생성되자마자 호출되는 훅
        // localStorage에 item이 있을 경우(길이가 0보다 큰 경우)
        if (localStorage.length > 0) {
            // localStorage를 순회하며 loglevel:webpack-dev-server가 아닌 아이템들을 todoItems 배열에 푸시
            // 매 loop 마다 i의 값은 변해야하기 떄문에 let으로 선언(ES6)
            for (let i = 0; i < localStorage.length ; i ++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    // this.todoItems.push(localStorage.key(i));
                    // 넣을 땐 JSON.stringify(), 꺼낼 땐 JSON.parse()
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

// const(const 변수는 외부 파일에서 사용가능)
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, payload) {
            // const의 특성상 오버라이딩이 안되기 때문에 비교적 안전한 프로그래밍을 위해 let 대신 const로 할당
            const obj = {completed: false, item: payload};
            localStorage.setItem(payload, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            // localStorage의 todoItem.item 삭제
            localStorage.removeItem(payload.todoItem);
            // splice는 자바스크립트 배열 API로 특정 <index>에서 <개수>를 지울 수 있음
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            // 최상위 컴포넌트에서는 컨테이너의 성격을 가지고 있기 때문에 최상위 컴포넌트 내에 data로 접근하는 것이 좋음
            // todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            // localStorage API는 update가 없기 때문에 삭제하고 다시 저장해야 한다
            localStorage.removeItem(payload.todoItem);
            localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
        },
        clearAll(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    },
});