// "use client";

import React from 'react';
import Link from 'next/link';
import styles from '../styles/movie.module.css';
// import { useRouter } from 'next/navigation';

type IMovieProps = {
  title: string;
  id: string;
  poster_path: string;
};

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  // 굳이 훅을 써서 상호작용하려면 아래 코드 활성화
  /*const router = useRouter(); // 'next/navigation'
  const onClick = () => {
    router.push(`/movies/${id}`);
  }*/

  return (
    <div className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
      </Link>
      {/* 굳이 훅을 써서 상호작용하려면 아래 방식 */}
      {/*<img src={poster_path} alt={title} onClick={onClick} />*/}
      {/* 선 패치 옵션 추가 => 이동할 페이지의 내용을 미리 패치시켜 로딩 시간을 최소화할 수 있다. 단 현재 화면에 보이는 링크 영역까지만 선 패치 진행 */}
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default Movie;
