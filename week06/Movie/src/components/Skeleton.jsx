// Skeleton.jsx

// Skeleton.jsx
import styled from 'styled-components';

// Skeleton을 위한 기본 스타일
const SkeletonCard = styled.div`
    width: 130px;
    height: 240px;
    background-color: #ddd;
    margin: 15px;
    border-radius: 10px;
    animation: pulse 1.5s infinite ease-in-out;
    
    @keyframes pulse {
        0% {
            background-color: #ddd;
        }
        50% {
            background-color: #ccc;
        }
        100% {
            background-color: #ddd;
        }
    }
`;

const SkeletonTitle = styled.div`
    width: 70%;
    height: 15px;
    background-color: #ddd;
    margin-top: 10px;
    margin-left: 10px;
`;

const SkeletonDate = styled.div`
    width: 50%;
    height: 12px;
    background-color: #ddd;
    margin-top: 5px;
    margin-left: 10px;
`;

const Skeleton = () => {
    return (
        <SkeletonCard>
            <SkeletonTitle />
            <SkeletonDate />
        </SkeletonCard>
    );
};

export default Skeleton;
