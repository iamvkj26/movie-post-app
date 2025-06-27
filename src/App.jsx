import { Routes, Route } from "react-router";
import Post from "./pages/Post";
import "./App.css";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Post />} />
            </Routes>
        </>
    );
};

export default App;