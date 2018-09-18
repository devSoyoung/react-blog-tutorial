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
> 이렇게 작성한 게시글을 저장하고, 수정하는 경우를 생각해보자. 입력할 내용이 [제목, 내용] 두 가지이므로 아마 화면이 똑같을 것이다. 그렇다면 수정을 위한 컴포넌트를 따로 만들지 말고 재사용 할 수 있으면 얼마나 좋을까?

게시글을 수정하는 컴포넌트를 만든다고 생각해보자.

실제 페이지에서는 서버에서 데이터를 가져와서 input 필드에 값을 채워줄 것이고, 그렇게 채워진 값을 사용자 입력으로 수정하려고 하면 동작을 안한다. state가 바뀌어야 react 화면이 다시 렌더링 되기 때문이다.

그래서 input 필드에 변경이 일어날 때, state를 바꾸어주어야 한다. 그래서 모든 input 필드를 state에 저장해두고, input의 onChange 이벤트 핸들러가 setState를 호출해서 상태를 변경하도록 만들어야한다.

일단 먼저 EditPost.js 파일을 만들었다. (src의 Pages 디렉토리 안에)
```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPost extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div className="text-center">
					<h3>Edit Post</h3>
					<Link to="/">Go back to Main page</Link>
				</div>
				<div className="mt-3">
					
				</div>
			</div>
		);
	}
}

export  default  EditPost;
```

이제 상태를 추가해 줄 차례다. constructor에서 클래스에 상태를 추가해주자.

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "This is Title",
			content: "This is Content",
	}
	
	render() {
		const { title, content } =  this.state;
		return (
			<div>
				<div className="text-center">
					<h3>Edit Post</h3>
					<Link to="/">Go back to Main page</Link>
				</div>
				<div className="mt-3">
					<label><h4>Title</h4></label>
					<input className="form-control" type="text" value={title} />
				</div>
				<div className="mt-3">
					<label><h4>Title</h4></label>
					<textarea className="form-control" rows={10} type="text" value={title} />
				</div>
			</div>
		);
	}
}

export  default  EditPost;
```

상태를 추가해주고, render함수에 input 필드를 추가해서 value도 state의 값으로 지정해주었다. 그리고 저장해서 실행해보면, input 필드의 값을 아무리 입력해도 수정되지 않는다. 크롬 관리자도구를 켜보면 다음과 같은 에러도 볼 수 있다.

> Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

onChange 핸들러 없이 value를 설정했기 때문에, read-only 필드로 렌더링되어 변경이 불가능하다는 뜻. `defaultValue`를 사용하라고 되어있는데 여기(아직 링크 못찾아서 안달음ㅠㅠ)를 보면 input은 state로 관리하는게 좋다고 되어있다.

나중에 서버로 전송하거나 가져와서 값을 처리할 때, store에 연결해서 등 상태들을 한 곳에 집중시켜서 관리하라고 권하고 있다. 그래서, state로 관리하는 방법은 아래와 같다. 

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "This is Title",
			content: "This is Content",
	}

	handleChange = (target, e) => (
		this.setState({
			[target]: e.target.value
		})
	)
	
	render() {
		const { title, content } =  this.state;
		const { handleChange } =  this;
		return (
			<div>
				<div className="text-center">
					<h3>Edit Post</h3>
					<Link to="/">Go back to Main page</Link>
				</div>
				<div className="mt-3">
					<label><h4>Title</h4></label>
					<input className="form-control" type="text" value={title} 
						onChange={(e) =>  handleChange('title', e)} />
				</div>
				<div className="mt-3">
					<label><h4>Title</h4></label>
					<textarea className="form-control" rows={10} type="text" value={title} 
						onChange={(e) =>  handleChange('title', e)}/>
				</div>
			</div>
		);
	}
}

export  default  EditPost;
```

이렇게 하면 state로 input을 관리할 수 있다. 값을 가져오고 싶을 때에도, DOM에 직접 접근해서 값을 가져올 필요 없이, state에서 가져오면 된다.	

해당 컴포넌트에서 값을 수정하는 경우는 state로 관리하고, setState를 통해 값을 수정해서 변화가 생기면 다시 렌더링을 하도록 해준다.(state를 직접 수정하는 것은 불가능하다.) 그렇다면, 다른 컴포넌트로 값을 전달(내 render()의 return에 렌더링 되는 자식 컴포넌트에게 전달)하는 경우는 어떻게 할까? 위 코드에 답이 있는데, 바로 props다. 


#### ES6의 클래스와 super(), extends
자바스크립트는 프로토타입 기반 객체지향 언어이다. 프로토타입 기반 프로그래밍은 클래스가 필요 없는 객체지향 프로그래밍 스타일로 프로토타입 체인, 클로저 등으로 객체 지향 언어의 상속, 캡슐화 등을 구현할 수 있다.

하지만 클래스 기반 언어에 익숙한 프로그래머들은 프로토타입 기반 프로그래밍 방식이 혼란스러울 수 있으며 자바스크립트를 어렵게 느끼게하는 하나의 장벽처럼 인식되었다. ES6의 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순명료한 새로운 문법을 제시하고 있다. 그렇다고 ES6의 클래스가 새로운 객체지향 모델을 제공하는 것은 아니며, 사실 **클래스도 함수**이고 기존 프로토타입 기반 패턴의 [Syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)일 뿐이다.  [(출처)](https://poiemaweb.com/es6-class)

* **extends**
	extends를 사용하여 부모 클래스를 상속받는 자식 클래스를 정의할 수 있다.
	```js
	class Child extends Parent {
		...
	}
	```
* **super**
	부모 클래스를 참조할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다. 
	
	1. *super 메소드(super())는 부모 클래스의 인스턴스를 생성*

		> super 메소드는 자식 class의 생성자 내부에서 부모 클래스의 생성자를 호출한다.(=부모 클래스의 인스턴스를 생성한다.) 자식 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 참조에러가 난다. 
		
	2. *super 키워드(super.)는 부모 클래스에 대한 참조*

	
	

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