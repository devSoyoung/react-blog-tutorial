# react-blog-tutorial

React를 공부하고자 하는 목적으로 간단한 블로그 홈페이지를 제작하고자 함.
주요 기능은 글 쓰기, 글 목록 받아와서 게시판 형태로 보여주기, 글 수정하기임.

***
## create-react-app

페이스북에서 제공하는 create-react-app을 이용해서 간편하게 프로젝트 폴더를 제작하였다.
`App.css`, `App.test.js`, `index.css`, `logo.svg` 같은 불필요한 파일은 삭제했다.

### create-react-app 설치

	npm install --global create-react-app

이 폴더 말고도 앞으로 react 프로젝트를 생성할 때 create-react-app을 사용할 것이기 때문에 전역으로 설치해준다.

***
# 개발 과정
## 탭 이름 변경하기

브라우저에 표시될 탭 이름을 변경해보자. `public` 폴더의 `index.html` 파일을 연다. head 태그 안의 title 태그 값을 바꿔준다. React Blog로 설정했다.

## App.js 수정하기

화면에 렌더링 될 컴포넌트 중에서 최상위 컴포넌트이다. 원래 create-react-app으로 프로젝트를 생성하면 로고 이미지랑 몇가지 문구들이 들어있는데 다 지워주고 render() 함수에서 리턴하는 부분을 아래와 같이 수정했다.

```js
import  React, { Component } from  'react';

class  App  extends  Component {
	render() {
		return (
			<div  className="App">
				<h1>React Blog Tutorial</h1>
			</div>
		);
	}
}

export  default  App;
```

## 프로젝트 실행해보기

해당 디렉토리로 들어가서 아래 커맨드 명령어를 입력해주면 된다.

	$ npm start

yarn이 설치된 경우에는 yarn start를 해줘도 된다.

	$ yarn start

