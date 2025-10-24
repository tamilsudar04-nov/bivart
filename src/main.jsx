
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistProvider.jsx';


createRoot(document.getElementById('root')).render(
  
   
    <CartProvider>
        <WishlistProvider>
             <BrowserRouter>
               <App />
               </BrowserRouter>
            </WishlistProvider> 
 
    </CartProvider>,
 
  
   
    
 
)
