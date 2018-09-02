# vue-intermediate
Vue.js 중급 강좌를 위한 리포지토리입니다.

## 목차
- Vue.js로 구현하는 TodoApp
- Vue.js를 위한 ES6
    - ES5 변수 스코프와 호이스팅
        - 스코프(Scope): 유효 범위
        - 호이스팅(Hoisting): js 해석기는 함수 선언식과 변수 선언을 코드 최상단에 있는 것으로 간주
        - 기존 js(ES5)는 블럭 {}과 상관없이 변수의 스코프가 설정됨
        - 메모리 할당 -> 연산
    - const: 값의 변경과 오버라이딩 모두 불가능
    - let: 값의 변경은 가능하나 오버라이딩은 불가능
    - Arrow Function(화살표 함수)
        - function 키워드 대신 =>로 대체
        - 콜백 함수의 문법 간소화
    - 향상된 객체 리터럴(Enhaced Object Literals)
        - 속성 메서드 축약
            - 객체 속성을 메서드로 선언할 때 function 키워드 생략 가능
        - 속성명 축약
            - 객체의 속성명과 값이 일치할 때 속성명하나로 축약 가능
- 복잡한 애플리케이션 구현을 위한 Vuex
    - 상태관리 라이브러리
    - react.js의 Flux 패턴 기반
    - Helper 기능을 가짐
    - 속성으로 state, getters, mutations, actions를 가짐
    - State: 컴포넌트 간 공유하는 데이터 ```data() 프로퍼티```
    - View: 데이터를 표시하는 화면 ```template```
    - Action: 사용자의 입력에 따라 데이터를 변경하는 ```methods```
    - Vuex의 컨셉은 단방향(State -> View -> Action)
    - 설치(ES6): npm install vuex --save 
    - 기술요소
        - state: 여러 컴포넌트에 등록되는 데이터 ```data```
        - getters: 연산된 state 값을 접근하는 속성 ```computed```
        - mutations: state 값을 변경하는 이벤트 로직(메서드) ```methods```
        - actions: 비동기 처리 로직을 선언하는 메서드 ```aysnc methods```

## License & Copyright
**Copyright © 2018 Captain Pangyo**
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.
