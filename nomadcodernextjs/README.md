# Lecture notes

## 1 : FrameWork Overview

### 1.1 Pages

#### **컴포넌트와 URL**

pages 폴더 내부에 있는 컴포넌트 폴더 이름은 <br/>
곧바로 URL 주소가 된다.

<br/>

404 페이지 또한 NextJS에서 자동으로 만들어준다.<br/>
(커스텀 가능)

<br/>

홈은 예외적으로 `/`을 디폴트 URL 주소로 갖는다.

<br/>
<br/>

#### **NextJS에서의 jsx**

**NextJS**에서 jsx를 사용할 때, <br/>
react를 import해 올 필요가 없다.

<br/>

(useState, useEffect등의 훅은 react import 필요)

<br/>
<br/>
<br/>

### 1.2 Static Pre Rendering

#### **NextJS의 장점**

앱에 있는 페이지들이 미리 서버에서 렌더링 되어 내려온다.(SSR)
<br/>

즉 첫 로딩시 CSR에 비해 빠른 렌더링이 가능하다(오...)

<br/>
<br/>
<br/>

### 1.3 Routing

#### **Navigation Bar**

navigating을 할 때 `<a>`태그를 이용하면<br/>
페이지 전체가 다시 로딩되게 된다 (SSR)
<br/>
따라서 CSR을 위해 `<a>`태그가 아닌 `<Link> `컴포넌트를 사용 해 주도록 하자

<br/>

#### **Link 컴포넌트**

next/link에서 기본제공 해주는 라우팅 컴포넌트
CSR을 도와준다<br/>

`import Link from 'next/link'` 를 통해 사용해주자

<br/>

#### **useRouter**

useRouter은 next에서 기본 제공해주는 라우팅 관련 훅이다.<br/>
현재 route의 url주소를 쉽게 얻을 수 있다.<br/>
import 해서 사용 해 주도록 하자.

<br/>
<br/>
<br/>

### 1.4 CSS Modules

#### CSS를 추가 해 주는 방법 1 : style

태그에 인라인 스타일을 적용 해 주는 방법

<br/>

#### index.module.css 파일 사용

<br/>

#### .module.css의 장점

클래스 식별자 명 중복에 대해 걱정하지 않아도 된다

<br/>
<br/>
<br/>

### 1.5 Styles JSX

NextJs의 고유 스타일 지정 방식<br/>
아래와 같은 방식으로 사용할 수 있다.
<br/>

컴포넌트 별 스코프를 가지기에 <br/>
식별자명 중복에 관한 걱정을 덜 수 있다.

```js
<style jsx>{`
  nav {
    background-color: darkolivegreen;
  }
  .active {
    color: bisque;
    text-decoration: underline;
  }
`}</style>
```

<br/>
<br/>
<br/>

### 1.6 Custom App

#### App Component

NextJS의 모든 컴포넌트에 대한 청사진<br/>
`_app.js` 파일명으로 생성할 수 있다.
<br/>

전역 관리하기도 좋을 것 같다는 생각이 <br/>
스멀스멀 드는 기능이다.

<br/>
<br/>
<br/>

### 2.5 Dynamic Routes

#### Static Routing

NextJS에서 정적 라우팅을 할 때는 <br/>
pages폴더 내부에서 원하는 이름으로 파일을 생성 해 주면 된다.

<br/>

#### Dynamic Routing

동적 라우팅을 할 때는 <br/>
대괄호 안에 변수를 넣어 파일 이름을 정해주면 된다.
<br/>
useRouter를 이용하여 router에 대한 정보를 받아보면,<br/>
router 객체의 query 프로퍼티 안에<br/>
변수에 대한 값이 담겨있는 것을 확인할 수 있다.

<br/>
<br/>
<br/>

### 2.6 Movie Detail

#### router hook

onClick등의 이벤트에 routing을 바인딩하고 싶다면<br/>
router hook을 이용하면 된다.

```js
const router = useRouter();
const onClick = (id) => {
  router.push(`/movies/${id}`);
};
```

<br/>
routing처리를 해 준 다음에 <br/>
api 키를 숨겨주는 것도 잊지 말자.

<br/>

push를 할 때 파라미터로 객체를 전달 해 줄 수도 있다.

```js
const onClick = (id) => {
  router.push({
    pathname: `/movies/${id}`,
    query: {
      title: "title",
    },
  });
};
```

<br/>
<br/>
<br/>

### 2.7 Catch All
