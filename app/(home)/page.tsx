import {Metadata} from "next";
import Link from "next/link";
import { API_URL } from '../../constants';

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
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
};

export default HomePage;