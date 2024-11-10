// navbar.jsx
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <StyledLink to="/">
            <Logo>Movie</Logo>
            </StyledLink>
            <In>
                <StyledLink to="login">
                    <Login>로그인</Login>
                </StyledLink>
                <StyledLink to="signup">
                    <Login>회원가입</Login>
                </StyledLink>
            </In>
        </Nav>
    );
};

export default Navbar;

const Nav=styled.nav`
    width:100%;
    height:70px;
    margin:0px;
    padding:0px;
    display:flex;
    justify-content: space-between; 
    align-items: center; 
    background-color:#282828;

`

const Logo=styled.div`
    color:white;
    font-weight:900;
    border: none;
    background-color:transparent;
    padding:20px;
    font-size:large;
`


const Login = styled.div`
    background-color: transparent;
    border: none;
    border-radius: 50px;
    color: white;
    margin:20px;
    padding:15px;

    &:hover {
        background-color: rgba(100, 100, 100, 0.8); 
        color: skyblue;
        font-weight: bold;
        transition: 1s;

    }
`



const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 부모의 색상(흰색)을 상속받음 */
    display: flex;
    align-items: center; /* 아이콘과 텍스트를 세로 정렬 */
`;

const In=styled.div`
    display:flex;
    justify-content: space-between; 
    align-items: center; 
`