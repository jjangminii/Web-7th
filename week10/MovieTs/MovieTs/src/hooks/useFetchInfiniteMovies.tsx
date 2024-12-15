import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMovies = async ({ pageParam = 1, queryKey }: { pageParam?: number; queryKey: Array<{ url: string }> }) => {
    const { url } = queryKey[0];
    const response = await axios.get(`${url}&page=${pageParam}`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2MyN2UwMmNmZjgxZTdlODIyZDFmOThmNGY4OGZmNCIsIm5iZiI6MTcyOTc5MjQzNS45ODY4MTQsInN1YiI6IjY2MzczZDY1MGY1MjY1MDEyYmJiY2Q5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYG1DnMeceSL7Olta_HURy0oOsOYiJYf07X3gk4jStk`
        }
    });
    return response.data;
};

const useFetchInfiniteMovies = (url: string) => {
    return useInfiniteQuery(
        [{ url }],
        fetchMovies,
        {
            getNextPageParam: (lastPage) => {
                return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
            },
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            enabled: !!url,
        }
    );
};

export default useFetchInfiniteMovies;
