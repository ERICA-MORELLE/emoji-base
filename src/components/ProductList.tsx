import React from 'react';
import { Product } from '../data/products';

interface ProductListPageProps {
  products: Product[];
}

const ProductListPage: React.FC<ProductListPageProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Tous Nos Produits et Leurs Notes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez les commentaires et réactions de nos clients
        </p>
      </div>

      <div className="space-y-8">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-blue-600 font-semibold">{product.price} €</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Reviews ({product.reviews.length})
              </h3>
              {product.reviews.length === 0 ? (
                <p className="text-gray-500 italic">Aucune review pour ce produit</p>
              ) : (
                <div className="space-y-4">
                  {product.reviews.map(review => (
                    <div 
                      key={review.id} 
                      className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4"
                    >
                      <div className="text-3xl">{review.emoji || '💬'}</div>
                      {review.text && (
                        <p className="text-gray-800 flex-grow">{review.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;