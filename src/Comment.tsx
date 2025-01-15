import React, { useState } from "react";
import { Link } from "react-router-dom";

const Comment = () => {
  // État pour le texte du commentaire
  const [commentText, setCommentText] = useState("");

  // Liste d'émojis
  const emojiList = [
    "😀", "😂", "😍", "😎", "🥺", "😢", "😡", "🤩", "😜"
  ];

  // État pour les commentaires
  const [comments, setComments] = useState([]);

  // Fonction pour ajouter un commentaire
  const addComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText(""); // Réinitialise le texte après ajout
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Ajouter un Commentaire avec Émojis</h1>

        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Écris ton commentaire ici..."
          className="w-full h-32 p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Affichage des emojis */}
        <div className="flex flex-wrap gap-4 mb-6">
          {emojiList.map((emoji, index) => (
            <button
              key={index}
              className="text-2xl"
              onClick={() => setCommentText(commentText + emoji)} // Ajoute l'emoji au texte
            >
              {emoji}
            </button>
          ))}
        </div>

        <button
          onClick={addComment}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Ajouter le Commentaire
        </button>

        {/* Affichage des commentaires */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Commentaires</h2>
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500">Aucun commentaire pour le moment.</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      < Link to ="/Test" > 
      <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"> Modalclass</button> 
      </Link>
    </div>
  );
}

export default Comment;
