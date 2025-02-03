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

    const handleDelete = (index: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet avis ?")) {
            onDeleteFeedback(index);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Panneau d'Administration</h2>
            <p className="mb-2">Total des avis : {totalFeedbacks}</p>
            <h3 className="font-semibold mb-2">Commentaires :</h3>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index} className="flex justify-between items-center mb-2 p-2 border-b">
                        <span>{feedback.emoji} - {feedback.comment}</span>
                        <button 
                            onClick={() => handleDelete(index)} 
                            className="bg-red-500 text-white rounded p-1 hover:bg-red-600 transition"
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
