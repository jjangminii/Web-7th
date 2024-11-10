// sidebar.jsx

import styled from 'styled-components';
import { IoMdSearch } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Side>
            <Category to="/search"> 
                <IoMdSearch />
                <Text>찾기</Text>
            </Category>
            <Category to="/movies"> 
                <BiSolidMoviePlay />
                <Text>영화</Text>
            </Category>
        </Side>
    );
};

export default Sidebar;

const Side = styled.aside`
    margin: 0px;
    padding: 0px;
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #282727;
`;

const Category = styled(Link)`
    display: flex;
    align-items: center;
    padding: 20px;
    text-decoration: none; 
    color: inherit;

    &:hover { 
        background-color: rgba(100, 100, 100, 0.5); 
        transition: 0.7s;
        color: skyblue;
    }
`;

const Text = styled.span`
    margin-left: 10px;
    color: white;
    justify-content: left;
`;
