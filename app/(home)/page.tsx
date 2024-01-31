import { Metadata } from 'next';
import { API_URL } from '../../constants';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

export const metadata: Metadata = {
    title: "home",
}

const getMovies = async () => {
    // 서버 응답이 느린 상황 의도적 연출
    // await new Promise((res) => setTimeout(res, 5000));
    const response = await fetch(API_URL);
    return await response.json();
}

const HomePage = async () => {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    );
};

export default HomePage;