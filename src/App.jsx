import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";

import WelcomePage from "./components/WelcomePage";
import Game from "./components/Game";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route element={<WelcomePage />} path="" exact />
                <Route element={<Game />} path="Game" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
