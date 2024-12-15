import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout: React.FC = () => {
    return (
        <Root>
            <Navbar />
            <Content>
                <Sidebar />
                <MainContent>
                    <Outlet />
                </MainContent>
            </Content>    
        </Root>
    );
};

export default RootLayout;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
`;

const MainContent = styled.div`
    flex: 1;
    padding: 20px;
    overflow: auto;
    min-height: calc(100vh - 100px);
`;
