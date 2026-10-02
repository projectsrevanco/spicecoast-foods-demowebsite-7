import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { MealPlans } from './pages/MealPlans';
import { Catering } from './pages/Catering';
import { TrackOrder } from './pages/TrackOrder';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CartProvider } from './lib/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="meal-plans" element={<MealPlans />} />
            <Route path="catering" element={<Catering />} />
            <Route path="track" element={<TrackOrder />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div className="p-24 text-center text-2xl font-serif">404 Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
