import React from 'react';
import {API_URL} from "../constants";

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
        <h1>Movie {movie.title}</h1>
    );
};

export default MovieInfo;