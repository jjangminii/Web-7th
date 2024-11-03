// movie.jsx
import styled from "styled-components";
const Movie = ({ movie }) => { // movie prop을 구조분해 할당
    console.log(movie.poster_path); // 확인용 콘솔 로그

    return (
        <Card>
            <StyledImg 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDB의 포스터 이미지를 불러옵니다.
                alt={movie.title}
            />
            <Overlay/>
            <Title>
                {movie.title}
            </Title>
            <Date>
                {movie.release_date}
            </Date>
        </Card>
    );
};

export default Movie;

const Card = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    color:white;
    overflow:hidden;
    margin:15px;
    width: 130px; 
    height:240px; 
`;

const StyledImg=styled.img`
    object-fit:cover;
    border-radius: 10px; 
`;

const Overlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); 
    opacity: 0;
    transition: opacity 0.3s; 
    
    ${Card}:hover & {
        opacity: 1; /* 마우스 오버 시 오버레이 보이게 */
    }
`;

const Title=styled.span`
    margin:10px 0px 0px 0px;
    font-size:12px;
`
const Date=styled.span`
    font-size:9px;
`