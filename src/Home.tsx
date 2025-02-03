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
    { id: 2, name: "Produit 2", description: "Description du produit 2 ", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Produit 3", description: "Description du produit 3", imageUrl: "https://via.placeholder.com/150" },
    { id: 4, name: "Produit 4", description: "Description du produit 4", imageUrl: "https://via.placeholder.com/150" }, 
    { id: 5, name: "Produit 5", description: "Description du produit 5", imageUrl: "https://via.placeholder.com/150" },
    {id: 6,name:"produit 6",description: "description du produit 6",imageUrl: }

];

const Home: React.FC<HomeProps> = ({ feedbacks, setFeedbacks }) => {
    const handleDeleteFeedback = (index: number) => {
        const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
        setFeedbacks(updatedFeedbacks);
    };

    return (
        <div className="min-h-screen bg-red-500 flex items-center">
            <div className="col-span-1 bg-white p-4 rounded-lg shadow-md grid grid-cols-6">
                <h2 className="text-2xl font-bold mb-4">Liste des produits</h2>
            
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
            </div>
            <Feedback feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
            <Admin feedbacks={feedbacks} onDeleteFeedback={handleDeleteFeedback} />
        </div>
    );
};

export default Home;
