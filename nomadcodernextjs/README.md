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
