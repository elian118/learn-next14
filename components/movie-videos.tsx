import React from 'react';
import {API_URL} from "../constants";

const getVideos = async (id: string) => {
    // 서버 응답이 느린 상황 의도적 연출
    // console.log(`Fetching videos: ${Date.now()}`);
    // await new Promise((res) => setTimeout(res, 3000));
    // 의도적 에러 연출
    // throw new Error('something was wrong...');
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
    const videos = await getVideos(id);
    return (
        <h6>{JSON.stringify(videos)}</h6>
    );
};

export default MovieVideos;