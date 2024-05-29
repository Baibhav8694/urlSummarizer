// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SummarizeForm from "./components/SummarizeForm";
import History from "./components/History";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>URL Summarizer</h1>
                    <Routes>
                        <Route path="/" element={<SummarizeForm />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
