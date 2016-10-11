Redux 파일구조 코딩하기!
==========================

    1. create-react-app [파일명]  => 모듈 이용하여 편하게 리액트앱 생성.
    2. npm install —save redux react-redux
    3. 아톰으로 열고 작업시작 !!
    4. /src 내에 components, actions, reducers 폴더생성, index.js 만들기!
    * 이때 index.js는 Store의 역할을 한다. 스토어는 상태트리 전체를 유지하는 책임을 진다. 액션이 들어왔을때 어떤 변화가 필요한지는 Reducer에게 위임한다. 이때때  Reducer는 실제적인 함수들이 담겨있다.

## FLUX의 문제점 몇가지.
> 1  스토어의 코드는 어플리케이션의 상태를 삭제하지않고는 리로딩이 불가하다.
	즉,  FLUX의 경우 store가 두가지를 포함한다. (상태변환을위한로직, 현재 어플리케이션 상태)
	따라서 Redux는 이 두가지를 store와 reducer두가지로 분리했다.
  2 어플리케이션의 상태는 매 액션마다 재기록된다.
	즉, 여러개의 액션이 하나의 State에 기록하다보니 이전상태들이 실수로 수정되는 경우가 있었다.
	따라서 Redux는 각각의 액션이 복사본을 만들고 이것을 최종 State에 순서대로 기록한다.
  3 서드파드 플러그인(third part plugin)이 들어갈 곳이 없다.
	개발자도구는 사용성이 좋아야한다. 몇줄의 코드를 추가하는 것만으로 개발자 도구를 사용할 수 있어야 한다. 즉,  기존의 코드에 서드파드플러그인을 추가할만한 확장점이 필요하다.
	따라서 Redux는 시스템의 부분을 다른 객체로 쉽게 감쌀수 있게했다.(확장점:미들웨어) 또한 상태변환로직을 트리를 이용하여 구조화하였다. 따라서 스토어는 상태가 변할때 하나의 명령만을 내리면 된다.

*   Redux의 작동 구조는 위의 카툰링크 참조

    => 카툰 링크 : http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/

============================

    5. /src/components 내에 루트 컴포넌트(App.js)를 만든다. 루트컴포넌트란, 단지 컴포넌트 계층구조에서 가장 상위에 존재하는 컴포넌트이다. 이는  어플리케이션을 초기화한 후에는 하는 일이 없다.
    6. 후에 필요에 따라 컴포넌트들을 생성한다. 여기에는 smart or dumb 한 컴포넌트들이 있다. smart component들은 액션처리를 책임진다. 따라서 뷰레이어바인딩에 의하여 액션들과 연결되어있다. 이후에 dumb component에게 props를 통해 함수들을 뿌려준다. dumb component들은 단지 콜백으로 받은 함수들을 호출한다.

    7. 다음으로 액션을 설정해준다. 액션을 설정할때는 src/actions 내에 ActionTypes.js 과 후에 액션들을 표현하는 구체적인 액션파일이 필요하다. ActionTypes에서는 액션들의 이름을 내보내주고, 각각의 액션파일에서는 액션들의 형태를 지정해준다.기본적으로 type은 꼭 지정해줘야한다.(inflearn예제에서는 구조가 단순하여 index.js에 모두 담았다. reducer에서는 ActionTypes를 불러와 이용하고 smart component에서는 각각의 액션파일을 불러 이용한다.

    8. 다음으로 리듀서들을 설정한다. 리듀서는 ActionTypes를 * as types로 불러와 function을 정의한다. 이때 변수는 (state,action)을 받고, 같은인수를 받은 함수는 같은결과를 내놓는 순수함수로 작성되어야한다.(즉, 현재시간,랜덤같은 요소가 들어가면 안되고, 네트워크, 데이터베이스 접근 안됨!.) 중요한 점은 리듀서는 이전상태를 변화시키는 것이아니라 새로운 스테이트를 반환하는 것이다.
    9. 리듀서들을 묶어주는 루트리듀서를 만든다. 이는 ‘redux’내의 {combineReducers} 메서드를 이용한다. 이는 스토어를 생성할때 반영한다.

    10. 이제 src/index.js 파일을 열어 스토어를 생성한다. 이는 ‘redux’내의 {createStore(reducers)}를 이용한다.

    11. 후에 뷰레이어바인딩 해준다. 이는 ‘react-redux’ 내의 {Provider}를 이용한다. ReactDOM.render 에서 첫번째 인수인 <App(루트컴포넌트)/>를 <Provider store={store}></Provider>사이에 넣어준다. createStore(reducers)를 이용하여 생성한 상수 store를 props로 넘겨준다.

    12. 후에 smart component에서 ‘react-redux’의  {connect}를 이용하여 스토어의 내용을 이용한다.
        [mapStateToProps] : 스테이트를 파라미터로
        [mapDispatchToProps] : 디스패치를 파라미터
        [mergeProps] : 스테이트와 디스패치둘다.
        [options] : 객체형태 pure withRef
