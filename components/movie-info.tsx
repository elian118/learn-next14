import React from 'react';
import {API_URL} from "../constants";
import styles from '../styles/movie-info.module.css'

const getMovie = async (id: string) => {
    // 서버 응답이 느린 상황 의도적 연출
    // console.log(`Fetching movies: ${Date.now()}`);
    // await new Promise((res) => setTimeout(res, 3000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
    const movie = await getMovie(id);
    return (
      <div className={styles.container}>
          <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
          <div className={styles.info}>
              <h1 className={styles.title}>{movie.title}</h1>
              <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
              <p>{movie.overview}</p>
              {/* 새 창이나 새 탭을 띄우는 경우 Link 불필요 */}
              <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
          </div>
      </div>
    );
};

export default MovieInfo;