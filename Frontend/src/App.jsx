import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import LoginPage from "@/pages/Login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
