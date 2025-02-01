// src/components/Produit.tsx
import React, { useState } from 'react';

interface ProduitProps {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    feedbacks: { emoji: string; comment: string }[];
    setFeedbacks: React.Dispatch<React.SetStateAction<{ emoji: string; comment: string }[]>>;
}

const Produit: React.FC<ProduitProps> = ({ name, description, imageUrl, feedbacks, setFeedbacks }) => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const emojis = [
        { emoji: "😀", description: "Grinning Face" },
        { emoji: "😂", description: "Face with Tears of Joy" },
        { emoji: "😍", description: "Heart Eyes" },
        { emoji: "😎", description: "Smiling Face with Sunglasses" },
        { emoji: "🥺", description: "Pleading Face" },
        { emoji: "🔥", description: "Fire" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedEmoji && comment) {
            setFeedbacks([...feedbacks, { emoji: selectedEmoji, comment }]);
            setComment('');
            setSelectedEmoji('');
        }
    };

    return (
        <div className="border rounded-lg p-4 shadow-md mb-4">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <form onSubmit={handleSubmit} className="mt-4">
                <select
                    value={selectedEmoji}
                    onChange={(e) => setSelectedEmoji(e.target.value)}
                    className="border rounded p-2 mr-2"
                >
                    <option value="">Choisissez un emoji</option>
                    {emojis.map((item, index) => (
                        <option key={index} value={item.emoji}>
                            {item.emoji} - {item.description}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Laissez un commentaire"
                    className="border rounded p-2 w-full"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white rounded p-2">
                    Soumettre
                </button>
            </form>
            <div>
                <h3 className="font-semibold">Commentaires :</h3>
                <ul>
                    {feedbacks.map((feedback, index) => (
                        <li key={index} className="text-gray-700">
                            {feedback.emoji} - {feedback.comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Produit;
