import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Post from "./pages/Post";
import "./App.css";

const App = () => {

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        fontSize: "16px"
                    }
                }}
            />
            <Routes>
                <Route path="/" element={<Post />} />
            </Routes>
        </>
    );
};

export default App;