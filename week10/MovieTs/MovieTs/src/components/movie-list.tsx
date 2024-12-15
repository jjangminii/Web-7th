import useFetchInfiniteMovies from "../hooks/useFetchInfiniteMovies";
import Movie from "./movie";
import SkeletonMovie from "./Skeleton";
import styled from "styled-components";

interface MovieListProps {
    url: string;
}

const MovieList: React.FC<MovieListProps> = ({ url }) => {
    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useFetchInfiniteMovies(url);

    if (isLoading) {
        return (
            <CardList>
                {Array.from({ length: 10 }, (_, index) => (
                    <SkeletonMovie key={index} />
                ))}
            </CardList>
        );
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <CardList>
                {data.pages.map((page) =>
                    page.results.map((movie) => <Movie key={movie.id} movie={movie} />)
                )}
            </CardList>
            <LoadMoreContainer>
                {hasNextPage && (
                    <button onClick={fetchNextPage}>
                        {isFetchingNextPage ? <LoadingSpinner /> : "Load More"}
                    </button>
                )}
            </LoadMoreContainer>
        </div>
    );
};

export default MovieList;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const LoadMoreContainer = styled.div`
    text-align: center;
    margin: 20px;
`;

const LoadingSpinner = styled.div`
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-left-color: #09f;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    margin-right: 10px;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
