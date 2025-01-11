import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import KidsPage from './pages/KidsPage';
import BeautyPage from './pages/BeautyPage';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Categories from './components/Categories';
import Lookbook from './components/Lookbook';
import Recommendations from './components/Recommendations';
import NewPage from './pages/NewPage';
import ProductDetails from './components/ProductDetails';

const PageWrapper = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="bg-white text-gray-900"
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Hero />
            <Categories />
            <ProductGrid />
            <Lookbook />
            <Recommendations />
            <Newsletter />
          </PageWrapper>
        } />
        <Route path="/login" element={
          <PageWrapper>
            <Login />
          </PageWrapper>
        } />
        <Route path="/register" element={
          <PageWrapper>
            <Register />
          </PageWrapper>
        } />
        <Route path="/women" element={
          <PageWrapper>
            <WomenPage />
          </PageWrapper>
        } />
        <Route path="/men" element={
          <PageWrapper>
            <MenPage />
          </PageWrapper>
        } />
        <Route path="/kids" element={
          <PageWrapper>
            <KidsPage />
          </PageWrapper>
        } />
        <Route path="/beauty" element={
          <PageWrapper>
            <BeautyPage />
          </PageWrapper>
        } />
        <Route path="/new" element={<NewPage />} />
        <Route path="/product/:id" element={
          <PageWrapper>
            <ProductDetails />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <Cart />
          <main className="pt-20">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
