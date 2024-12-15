import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import MovieList from "../components/movie-list";
import styled from 'styled-components';

// SearchPage 컴포넌트
const SearchPage: React.FC = () => {
    // 상태 관리
    const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태
    const [url, setUrl] = useState<string>(''); // API URL 상태

    // 검색 처리 함수
    const handleSearch = debounce((query: string) => {
        if (query) {
            const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=YOUR_API_KEY`;
            setUrl(apiUrl);
        }
    }, 500);

    // 검색어 상태가 변경될 때 debounce된 검색 함수 호출
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
            {url && <MovieList url={url} />} {/* 검색 결과가 있을 때 MovieList 컴포넌트 렌더링 */}
        </SearchContainer>
    );
};

export default SearchPage;

// 스타일드 컴포넌트 타입 정의
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
