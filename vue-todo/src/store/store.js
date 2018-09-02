import Vue from 'vue'
import Vuex from 'vuex'

// use메서드는 Vue의 플러그인 기능으로 Vue를 사용할 때 전역(global functionality)으로 특정 기능을 추가하고 싶은 때 사용
Vue.use(Vuex);

// const(const 변수는 외부 파일에서 사용가능)
export const store = new Vuex.Store({

});