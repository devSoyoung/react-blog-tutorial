# react-blog-tutorial

React를 공부하고자 하는 목적으로 간단한 블로그 홈페이지를 제작하고자 함.
* 주요 기능
	* 글 쓰기
	* 글 수정하기
	* 글 목록 보기

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

## 메인페이지 제작
### 카테고리 만들기
페이지들을 따로 관리해주기 위해서 `/src` 디렉토리에 `Pages` 폴더를 만들어주었다. 메인페이지를 렌더링해줄 컴포넌트를 만들기 위해 `MainPage.js` 파일을 추가했다.

일단 꾸며주는 건 중요하지 않기 때문에, 대충 만들자. 구현할 기능인 글쓰기, 글 목록 보기 페이지를 선택할 수 있는 화면을 만들어 줄 것이다. 아래와 같이 `MainPage.js` 파일을 작성해주었다.

```js
import React, { Component } from 'react';

class MainPage extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>Write Post</li>
					<li>Post List</li>
				</ul>
			</div>
		);
	}
}

export default MainPage;
```

컴포넌트를 만든다고 해서 화면에 보여지는 것이 아니다. 렌더링을 해줘야하는데, 이미 화면에 렌더링 되어있는 최상위 컴포넌트인 App 컴포넌트에 MainPage 컴포넌트를 렌더링해주자. /src의 App.js 파일을 아래와 같이 수정했다.

```js
import React, { Component } from 'react';
import MainPage from './Pages/MainPage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Blog Tutorial</h1>
				<MainPage />
			</div>
		);
	}
}

export  default  App;
```

render() 함수의 return 부분에서 사용하고 있는 문법이 JSX이다. ~~이에 대해서는 따로 정리해서 링크를 걸어두겠다.~~ HTML처럼 생겼는데 조금 다르다. 일단 알아두어야 할 것은 모든 태그를 다 닫아줘야 한다. 그리고 나서 파일을 저장하면 화면에 Write Post, Post List가 생성되는 것을 볼 수 있다.

### 링크 달아주기, React Router
화면에 생겨난 저 항목들을 선택하면 원하는 페이지를 보여주도록 설정하고 싶다. 이럴 때, 보통 a태그를 써서 해당 페이지로 이동하는데, React의 경우 주로 Single Page Application을 제작하는데 사용된다. 페이지를 이동할 때 새로고침 되는 것이 아니라 해당 부분만 바뀌게끔 한다.

주소에 따라서 화면에 보이는 것이 달라지도록 해주려면 Router를 사용해야 한다. React Router는 v4까지 나와있다. 브라우저에서 사용하려면 react-router-dom을, 모바일에서 사용하려면 react-router-native였나? 를 설치하면 된다.

	$ npm install --save react-router-dom

여기에서 Link 컴포넌트를 사용할 것인데, Link 컴포넌트에 대한 설명은 아래에 간단하게.

> Link는 React Router v4에서 anchor link(a 태그)를 대신하고자 설계된ㅡnavigation 요소를 생성하기 위한ㅡ 컴포넌트이다. anchor 링크(전체 페이지를 리로딩)와 다르게 Link는 브라우저의 위치 경로에 매칭되는 UI의 부분만을 리로딩한다.  Link 컴포넌트는 to 속성을 가지는데, navigate할 목적지 경로를 알려주는 역할을 한다.

	import { Link } from 'react-router-dom'
	const Nav = () => (
		<Link to='/'>Home</Link>
	)

MainPage의 항목을 클릭했을 때, url이 바뀔 수 있도록 Link 컴포넌트를 적용해주자.

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/write">Write Post</Link></li>
					<li><Link to="/post">Post List</Link></li>
				</ul>
			</div>
		);
	}
}

export default MainPage;
```

그런데 이 react-router의 요소들이 동작하기 위해서는 최상위 컴포넌트를 Router로 감싸주어야 한다. 따라서 App.js도 수정해준다.

```js
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>React Blog Tutorial</h1>
					<MainPage />
				</div>
			</BrowserRouter>
		);
	}
}

export  default  App;
```

그리고 나서 리로딩된 페이지를 보면, 카테고리 항목들이 활성화 되어 있고 클릭했을 때 브라우저의 url 부분이 바뀌는 것을 확인할 수 있다.

### 기능 관련 페이지 컴포넌트 만들기

url에 따라 다른 화면을 보여주고 싶다. 게시글 작성을 클릭했을 때, 게시글 작성하는 부분이 나타날 수 있도록 게시글을 작성하는 화면을 보여줄 컴포넌트를 만들자.

Pages 디렉토리에 WritePost.js 파일을 추가한다. 그리고 아래와 같이 작성한다.

```js
import  React,  {  Component  }  from  'react';

class  WritePost  extends  Component {
	render() {
		return (
			<div>
				<h2>Write Post</h2>
			</div>
		);
	}
} 

export  default  WritePost;
```

이제 url이 /write일 때, 이 컴포넌트가 렌더링 될 수 있게 설정해주자.  App.js를 아래와 같이 수정한다.

(그 전에 App.js에 있던 제목을 MainPage로 옮겨주었다.)

```js
// App.js
import  React,  {  Component  }  from  'react';
import  {  BrowserRouter,  Route  }  from  'react-router-dom';

import MainPage from './Pages/MainPage';
import WritePost from './Pages/WritePost';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Route path="/write" component={WritePost} />
					<Route path="/" component={MainPage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
```

Route는 path에 일치하는 url일 때 component를 렌더링해준다. Route들을 div로 감싸준 이유는 Router 컴포넌트가 한 개의 child 컴포넌트만 가질 수 있기 때문이다. 

이렇게 하고 저장을 해서 write post를 누르면 write post의 컴포넌트 아래에 MainPage의 내용이 또 보인다. 이걸 없애주고 싶다면 MainPage의 Route를 아래와 같이 수정한다.

```js
<Route exact path="/" component={MainPage} />
```
둘 다 보이는 이유는 Router내에 path가 일치하는 모든 Route 들이 화면에 렌더링시켜주기 때문인데, exact 옵션을 넣어주면 정확하게 일치하는 경우에만 렌더링한다.

마찬가지로 Post List 부분도 컴포넌트를 만들어주고 Route를 추가해주자.

### 게시글 작성 컴포넌트 수정
게시글 작성 컴포넌트에 제목만 달랑 있는데, 메인화면으로 돌아갈 방법이 없으니 추가해주도록 하자. Go back to Main page를 넣어주고 Link를 이용해서 url을 변경해주도록 했다.

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WritePost extends Component {
	render() {
		return (
			<div>
				<h2>Write Post</h2>
				<Link to="/">Go back to Main page</Link>
			</div>
		);
	}
} 

export  default  WritePost;
```
그리고 디자인을 좀 신경쓰고 싶어져서 bootstrap을 추가했다. reactstrap도 있는데, 컴포넌트들 굳이 import해서 쓰기 싫어서 그냥 bootstrap 추가하고 src/index.js에 css 파일을 import해주어서 적용했다. (이 지점에서 css 추가하느라 파일들이 많이 수정됨.)

어쨌든, 게시글 작성 컴포넌트에 값을 작성해주는 input 필드를 추가했다.

```js
import  React,  {  Component  }  from  'react';
import  {  Link  }  from  'react-router-dom';

class  WritePost  extends  Component {
	render() {
		return (
			<div>
				<div  className="text-center">
					<h2>Write Post</h2>
					<Link  to="/">Go back to Main page</Link>
				</div>
				<form  className="mt-5">
					<div  className="form-group">
						<label  htmlFor="title">제목</label>
						<input  className="form-control"  id="title"  />
					</div>
					<div  className="form-group">
						<label  htmlFor="contents">내용</label>
						<textarea  className="form-control"  id="contents"  rows={10} />
					</div>
					<div className="row">
						<div className="col clearfix">
							<input type="submit"  className="btn btn-primary float-right" value="Save" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default WritePost;
```

### 게시글을 수정할 때 - Props, State
이렇게 작성한 게시글을 저장하고, 수정하는 경우를 생각해보자. 입력할 내용이 [제목, 내용] 두 가지이므로 아마 화면이 똑같을 것이다. 그렇다면 수정을 위한 컴포넌트를 따로 만들지 말고 재사용 할 수 있으면 얼마나 좋을까?

### 게시글 목록
```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
	render() {
		return (
			<div>
				<div className="text-center">
					<h2>Post List</h2>
					<Link to="/">Go back to Main page</Link>
				</div>
				<table className="table mt-5 text-center">
					<thead>
						<th scope="col">#</th>
						<th scope="col">title</th>
						<th scope="col">link</th>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Sample Post</td>
							<td><Link to={`/post/${1}`}>View Post</Link></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default PostList;
```
게시글 목록을 보여주는 테이블을 다음과 같이 추가했다.  포스트를 보여주기 위한 Link 부분을 잘 보면 `(백틱)을 사용했는데, 문자열에 자바스크립트 변수를 추가해서 완성하고 싶을 때 사용하는 ES6 문법이다. URL을 만들 때 종종 사용한다.