import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <h1>{router.query.title || title}</h1>
  )
}


export function getServerSideProps({params : {params}}){
  return {
    props: {
      params
    }
  }
}
/*
  동적 라우팅을 할 수 있는 페이지.
  대괄호 안에 변수명을 넣어 파일명을 지으면 된다.
*/