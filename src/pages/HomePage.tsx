import React from 'react';
import { Product, Review } from '../data/products';
import ProductCard from '../components/ProductCard';


interface HomePageProps {
  products: Product[];
  onReview: (productId: number, review: Review) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onReview }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Découvrez Nos Produits
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une sélection soigneusement choisie de produits  de qualités
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 8).map(product => (
          <div 
            key={product.id} 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <ProductCard 
              product={product} 
              onReview={onReview}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;