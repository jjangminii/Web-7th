import Movie from './movie.jsx';
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const MovieList = ({ url }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2MyN2UwMmNmZjgxZTdlODIyZDFmOThmNGY4OGZmNCIsIm5iZiI6MTcyOTc5MjQzNS45ODY4MTQsInN1YiI6IjY2MzczZDY1MGY1MjY1MDEyYmJiY2Q5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYG1DnMeceSL7Olta_HURy0oOsOYiJYf07X3gk4jStk`
                    }
                });
                setMovies(response.data.results); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        getMovies();
    }, [url]);

    if (loading) return <p>Loading...</p>; // 로딩 상태 표시
    if (error) return <p>Error: {error}</p>; // 에러 상태 표시

    return (
        <CardList>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </CardList>
    );
};

export default MovieList;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap; /* 요소들이 줄바꿈되도록 설정 */
    justify-content:space-evenly; /* 자식 요소 간의 간격을 균등하게 조절 */; 
    align-items: center;
`;
