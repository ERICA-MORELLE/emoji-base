// import React, { useState } from 'react';

// interface ProduitProps {
//     id: number;
//     name: string;
//     description: string;
//     imageUrl: string; // Ajout de l'URL de l'image
// }

// const Produit: React.FC<ProduitProps> = ({ id, name, description, imageUrl }) => {
//     const [selectedEmoji, setSelectedEmoji] = useState<string>('');
//     const [review, setReview] = useState<string>('');
//     const [rating, setRating] = useState<number>(0);
//     const [reviews, setReviews] = useState<{ emoji: string; review: string; rating: number }[]>([]);

//     const emojis = [
//         { emoji: "😀", description: "Grinning Face" },
//         { emoji: "😂", description: "Face with Tears of Joy" },
//         { emoji: "😍", description: "Heart Eyes" },
//         { emoji: "😎", description: "Smiling Face with Sunglasses" },
//         { emoji: "🥺", description: "Pleading Face" },
//         { emoji: "💀", description: "Skull" },
//         { emoji: "🔥", description: "Fire" },
//         { emoji: "💩", description: "Pile of Poo" },
//     ];

//     const handleReviewSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (review && selectedEmoji) {
//             setReviews([...reviews, { emoji: selectedEmoji, review, rating }]);
//             setReview('');
//             setSelectedEmoji('');
//             setRating(0);
//         }
//     };

//     return (
//         <div className="border rounded-lg p-4 shadow-md mb-4">
//             <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
//             <h2 className="text-xl font-bold mt-2">{name}</h2>
//             <p className="text-gray-600">{description}</p>
//             <form onSubmit={handleReviewSubmit} className="mt-4">
//                 <div className="flex items-center">
//                     <select
//                         value={selectedEmoji}
//                         onChange={(e) => setSelectedEmoji(e.target.value)}
//                         className="border rounded p-2 mr-2"
//                     >
//                         <option value="">Choisissez un emoji</option>
//                         {emojis.map((item, index) => (
//                             <option key={index} value={item.emoji}>
//                                 {item.emoji} - {item.description}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <span
//                                 key={star}
//                                 onClick={() => setRating(star)}
//                                 className={`cursor-pointer text-${rating >= star ? 'yellow' : 'gray'}-800`}
//                             >
//                                 ★
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//                 <input
//                     type="text"
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                     placeholder="Laissez un avis"
//                     className="border rounded p-2 w-full mt-2"
//                 />
//                 <button type="submit" className="mt-2 bg-blue-500 text-white rounded p-2">
//                     Soumettre
//                 </button>
//             </form>
//             <div className="mt-4">
//                 <h3 className="font-semibold">Avis :</h3>
//                 <ul>
//                     {reviews.map((r, index) => (
//                         <li key={index} className="text-gray-700">
//                             {r.emoji} - {r.review} - {Array(r.rating).fill('★').join('')}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Produit;


// src/components/AdminPanel.tsx


// src/components/AdminPanel.tsx
import React from 'react';

interface Feedback {
    emoji: string;
    comment: string;
}

interface AdminProps {
    feedbacks: Feedback[];
    onDeleteFeedback: (index: number) => void;
}

const Admin: React.FC<AdminProps> = ({ feedbacks, onDeleteFeedback }) => {
    const totalFeedbacks = feedbacks.length;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <p className="mb-2">Total Feedbacks: {totalFeedbacks}</p>
            <h3 className="font-semibold mb-2">Commentaires :</h3>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{feedback.emoji} - {feedback.comment}</span>
                        <button 
                            onClick={() => onDeleteFeedback(index)} 
                            className="bg-red-500 text-white rounded p-1"
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
