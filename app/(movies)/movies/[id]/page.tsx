import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
    return (
        <div>
            {/* Suspense: 서로 다른 서버 컴포넌트 랜더링 시 각각의 비동기 병렬 페치를 지원하고 fallback 속성으로 로딩 상태까지 보여줄 수 있는 래퍼 컴포넌트 */}
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

export default MovieDetail;