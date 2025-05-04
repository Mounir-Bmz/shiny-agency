import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Freelances from './pages/Freelances';
import Survey from './pages/Survey';
import Results from './pages/Results'; // Ajoute cette ligne
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { SurveyProvider } from './context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SurveyProvider>
                <Header title="Shiny Agency" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="/survey/:questionNumber" element={<Survey />} />
                    <Route path="/results" element={<Results />} /> {/* Ajoute cette ligne */}
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </SurveyProvider>
        </BrowserRouter>
    </React.StrictMode>
);