import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BroskiBookSpotPage from './pages/BroskiBookSpotPage';
import OfflineEmailCapturePage from './pages/OfflineEmailCapturePage';
import OfflineThankYouPage from './pages/OfflineThankYouPage';
import OfflineCrossword1Page from './pages/OfflineCrossword1Page';
import OfflineCrossword2Page from './pages/OfflineCrossword2Page';
import OfflineLogicChallengePage from './pages/OfflineLogicChallengePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
    return (
        <Router>
            <CartProvider>
                <ScrollToTop />
                <CartDrawer />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/broski" element={<BroskiBookSpotPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Legal & Policy Routes */}
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsOfServicePage />} />

                    {/* Offline Survival Club Routes — legacy, not yet linked from main nav */}
                    <Route path="/offline" element={<OfflineEmailCapturePage />} />
                    <Route path="/offline/thank-you" element={<OfflineThankYouPage />} />
                    <Route path="/offline/crossword-1" element={<OfflineCrossword1Page />} />
                    <Route path="/offline/crossword-2" element={<OfflineCrossword2Page />} />
                    <Route path="/offline/logic-challenge" element={<OfflineLogicChallengePage />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;