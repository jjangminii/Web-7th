// SearchPage.jsx

import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import MovieList from "../components/movie-list";
import styled from 'styled-components';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [url, setUrl] = useState('');

    // debounce 처리하여 API 호출을 제어
    const handleSearch = debounce((query) => {
        if (query) {
            const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=YOUR_API_KEY`;
            setUrl(apiUrl);  // URL을 설정하여 MovieList에 전달
        }
    }, 500);  // 500ms 지연

    // 검색어가 변경될 때마다 URL을 업데이트하도록 함
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    return (
        <SearchContainer>
            <input
                type="text"
                placeholder="영화 제목을 검색하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {url && <MovieList url={url} />}  {/* URL이 설정되면 MovieList 컴포넌트 표시 */}
        </SearchContainer>
    );
};

export default SearchPage;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    padding: 20px;
    
    input {
        width: 100%;
        max-width: 500px;
        padding: 10px;
        font-size: 16px;
        border-radius: 50px;
        border: 1px solid #ccc;
    }
`;
