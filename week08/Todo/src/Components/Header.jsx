import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ff6f61;
`;

const Header = () => {
    return <HeaderContainer>⚡ UMC ToDoList ⚡</HeaderContainer>;
};

export default Header;
