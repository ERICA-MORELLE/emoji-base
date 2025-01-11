import React from "react";
import { Link } from "react-router-dom";
const emojis = [
  { emoji: "😀", description: "Grinning Face" },
  { emoji: "😂", description: "Face with Tears of Joy" },
  { emoji: "😍", description: "Heart Eyes" },
  { emoji: "😎", description: "Smiling Face with Sunglasses" },
  { emoji: "🥺", description: "Pleading Face" },
  { emoji: "💀", description: "Skull" },
  { emoji: "🔥", description: "Fire" },
  { emoji: "💩", description: "Pile of Poo" },
];

function Home() {
  return (
    <div className="min-h-screen bg-red-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Emojis et and their descriptions</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emojis.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="text-6xl text-center">{item.emoji}</div>
              <p className="text-center text-lg font-medium text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/comment">
  <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
    Add comment
  </button>
</Link>

    </div>
  );
}
export default Home