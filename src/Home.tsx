// src/components/Home.tsx

import Admin from "./component/Admin";
import Feedback from "./component/Feedback";
import Produit from "./component/Produit";

interface FeedbackType {
    emoji: string;
    comment: string;
}

interface HomeProps {
    feedbacks: FeedbackType[];
    setFeedbacks: React.Dispatch<React.SetStateAction<FeedbackType[]>>;
}


const products = [
    { id: 1, name: "Produit 1", description: "Description du produit 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Produit 2", description: "Description du produit 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Produit 3", description: "Description du produit 3", imageUrl: "https://via.placeholder.com/150" },
];

const Home: React.FC<HomeProps> = ({ feedbacks, setFeedbacks }) => {
    const handleDeleteFeedback = (index: number) => {
        const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
        setFeedbacks(updatedFeedbacks);
    };

    return (
        <div className="min-h-screen bg-red-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-8">Emoji Feedback Board</h1>
            {products.map(product => (
                <Produit
                    key={product.id} 
                    id={product.id} 
                    name={product.name} 
                    description={product.description} 
                    imageUrl={product.imageUrl} 
                    feedbacks={feedbacks} 
                    setFeedbacks={setFeedbacks} 
                />
            ))}
            <Feedback feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
            <Admin feedbacks={feedbacks} onDeleteFeedback={handleDeleteFeedback} />
        </div>
    );
};

export default Home;
