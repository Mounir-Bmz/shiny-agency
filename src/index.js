import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Freelances from './pages/Freelances';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { SurveyProvider, ThemeProvider } from './context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SurveyProvider>
                <ThemeProvider>
                    <Header title="Shiny Agency" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="/survey/:questionNumber" element={<Survey />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </ThemeProvider>
            </SurveyProvider>
        </BrowserRouter>
    </React.StrictMode>
);