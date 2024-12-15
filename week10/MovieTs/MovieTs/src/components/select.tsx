import styled from "styled-components";
import { SelImage } from "../mocks/category";
import { Link } from "react-router-dom";

const Select: React.FC = () => {
    return (
        <ImageContainer>
            {SelImage.results.map((category) => (
                <Link key={category.id} to={category.link}>
                    <Card 
                        style={{ backgroundImage: `url(${category.image})` }}
                    >
                        <CategoryTitle>{category.name}</CategoryTitle>
                    </Card>
                </Link>
            ))}
        </ImageContainer>
    );
};

export default Select;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: center;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    overflow: hidden;
    margin: 15px;
    width: 300px;
    height: 230px; 
    background-size: cover;

    &:hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        transition: background-color 2s ease;
    }
`;

const CategoryTitle = styled.h3`
    position: absolute;
    top: 45%;
    color: white;
    margin: 0;
    font-size: 15px;
    padding: 3px 0px 5px 5px;
    border-radius: 5px;
`;
