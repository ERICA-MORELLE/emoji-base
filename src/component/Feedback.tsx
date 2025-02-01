// src/components/FeedbackBoard.tsx
import React, { useState } from 'react';

const emojis = [
    { emoji: "😀", description: "Grinning Face" },
    { emoji: "😂", description: "Face with Tears of Joy" },
    { emoji: "😍", description: "Heart Eyes" },
    { emoji: "😎", description: "Smiling Face with Sunglasses" },
    { emoji: "🥺", description: "Pleading Face" },
    { emoji: "🔥", description: "Fire" },
];

interface FeedbackProps {
    feedbacks: { emoji: string; comment: string }[];
    setFeedbacks: React.Dispatch<React.SetStateAction<{ emoji: string; comment: string }[]>>;
}

const Feedback: React.FC<FeedbackProps> = ({ feedbacks, setFeedbacks }) => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedEmoji && comment) {
            setFeedbacks([...feedbacks, { emoji: selectedEmoji, comment }]);
            setComment('');
            setSelectedEmoji('');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Emoji Feedback Board</h2>
            <form onSubmit={handleSubmit} className="mb-4">
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

export default Feedback;
