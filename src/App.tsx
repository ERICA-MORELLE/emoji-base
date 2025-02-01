import React, { useState } from 'react';

 import { Routes, Route  } from 'react-router-dom';
import Produit from './component/Produit';
import Admin from './component/Admin';
import Feedback from './component/Feedback';
import Home from './Home';




const App = () => {
     const [feedbacks, setFeedbacks] = useState<{ emoji: string; comment: string }[]>([]);

    // const handleDeleteFeedback = (index: number) => {
    //     const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    //     setFeedbacks(updatedFeedbacks);
    // };

    return (
        <div>
            {/* <h1>Emoji Board</h1>
             <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/Produit">Produit</Link></li>
                </ul>
            </nav> */}
            <Routes>
                <Route path="/" element={<Home feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />
                <Route path="/feedback" element={<Feedback feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />
                <Route path="/admin " element={<Admin feedbacks={feedbacks } setFeedbacks={setFeedbacks}  />} />
                <Route path="/produit" element={<Produit feedbacks={feedbacks} setFeedbacks={setFeedbacks} />} />

            </Routes>   
        </div>
    );
};

export default App;
