import { Outlet } from "react-router-dom";
import Select from "../components/select";

const CategoryPage: React.FC = () => {
    return (
        <>
            <h1>카테고리</h1>
            <Select />
            <Outlet />
        </>
    );
};

export default CategoryPage;
