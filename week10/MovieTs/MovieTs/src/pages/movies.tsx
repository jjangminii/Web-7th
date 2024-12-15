import React from "react";
import MovieList from "../components/movie-list";
import { useParams } from "react-router-dom";

interface MoviesPageParams {
    category: "popular" | "now-playing" | "top-rated" | "up-coming"; // category로 받을 수 있는 값들
}

const MoviesPage: React.FC = () => {
    const { category } = useParams<MoviesPageParams>(); // 동적 경로의 category 파라미터 가져오기

    // category에 따라 URL을 설정하는 매핑 객체
    const apiUrls: Record<MoviesPageParams["category"], string> = {
        "popular": "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
        "now-playing": "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
        "top-rated": "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
        "up-coming": "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
    };

    // 현재 category에 맞는 URL을 전달
    const url = category ? apiUrls[category] : undefined; // category가 없을 때 대비

    return url ? <MovieList url={url} /> : <p>잘못된 카테고리입니다.</p>;
};

export default MoviesPage;
