import ProductListPage from "./components/ProductList";
import { initialProducts, Product, Review } from "./data/products";
import HomePage from "./pages/HomePage";
import "./styles/globals.css";
import React, { useState } from 'react';



const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleReview = (productId: number, review: Review) => {
    const updatedProducts = products.map(product => 
      product.id === productId 
        ? {...product, reviews: [...product.reviews, review]} 
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed top-0 left-0 right-0 z-10 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Low Cost</h1>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                currentPage === 'home' 
                  ? 'bg-white text-blue-700 hover:bg-blue-100' 
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setCurrentPage('products')} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                currentPage === 'products' 
                  ? 'bg-white text-blue-700 hover:bg-blue-100' 
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              Tous les Produits
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <HomePage 
          products={products} 
          onReview={handleReview} 
        />
      ) : (
        <ProductListPage products={products} />
      )}
    </div>
  );
};

export default App;