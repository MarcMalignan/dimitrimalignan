import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Agenda from './pages/Agenda';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MissingVoices from './pages/MissingVoices';
import Music from './pages/Music';
import Photos from './pages/Photos';
import Presse from './pages/Presse';
import Videos from './pages/Videos';

const client = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={client}>
      <BrowserRouter basename="/">
        <div id="app">
          <Header />
          <main id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/music" element={<Music />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/presse" element={<Presse />} />
              <Route path="/missing-voices" element={<MissingVoices />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
