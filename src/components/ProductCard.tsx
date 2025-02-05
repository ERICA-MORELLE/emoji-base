import React, { useState } from 'react';
import EmojiReaction from './EmojiReaction';
import { Product, Review } from '../data/products';

interface ProductCardProps {
  product: Product;
  onReview: (productId: number, review: Review) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onReview }) => {
  const [newReview, setNewReview] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleSubmitReview = () => {
    if (newReview || selectedEmoji) {
      const review: Review = {
        id: Date.now(),
        author: 'Utilisateur Anonyme',
        text: newReview,
        emoji: selectedEmoji,
        date: new Date()
      };
      onReview(product.id, review);
      setNewReview('');
      setSelectedEmoji('');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="relative">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full">
          <span className="text-blue-600 font-bold">{product.price} fcfa</span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        <div className="space-y-4">
          <EmojiReaction 
            onSelect={(emoji) => setSelectedEmoji(emoji)}
            selectedEmoji={selectedEmoji}
          />

          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Votre commentaire..."
            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 transition-all"
            rows={3}
          />

          <button 
            onClick={handleSubmitReview}
            disabled={!newReview && !selectedEmoji}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;