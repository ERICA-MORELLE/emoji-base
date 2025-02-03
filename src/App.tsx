import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Produit from './component/Produit';
import Admin from './component/Admin';
import Feedback from './component/Feedback';
import Home from './Home';

const App = () => {
    const [feedbacks, setFeedbacks] = useState<{ emoji: string; comment: string }[]>([]);

    const handleDeleteFeedback = (index: number) => {
        const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
        setFeedbacks(updatedFeedbacks);
    };

    return (
        <div>
            <nav className="bg-blue-00 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">😀&😍</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition">
                            Feedback
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition">
                            Admin
                        </Link>
                    </li>
                    <li>
                        <Link to="/produit" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition">
                            Produit
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
            <Routes>
                <Route path="/" element={<Home feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />
                <Route path="/feedback" element={<Feedback feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />
                <Route path="/admin" element={<Admin feedbacks={feedbacks} onDeleteFeedback={handleDeleteFeedback} />} />
                <Route path="/produit" element={<Produit feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />
            </Routes>
        </div>
    );
};

export default App;
