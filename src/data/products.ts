export interface Review {
    id: number;
    author: string;
    text?: string;
    emoji?: string;
    date: Date;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    reviews: Review[];
}
  

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Tenis Élégant",
    description: "Un tenis dernier cri ",
    price: 799.99,
    images: [
      "/images/chaussure.jpg", 
      "/images/chaussure.jpg"
    ],
    reviews: []
    },
    {
        id: 2,
        name: "chaussure Élégant",
        description: "Une chaussure dernier cri",
        price: 3000,
        images: [
          "/images/chaussure.jpg", 
          "/images/chaussure.jpg"
        ],
        reviews: []
    },
    {
        id: 3,
        name: "chaussure Élégant",
        description: "Une chaussure dernier cri",
        price: 5000,
        images: [
          "/images/chaussure.jpg", 
          "/images/chaussure.jpg"
        ],
        reviews: []
    },
    {
        id: 4,
        name: "chaussure Élégant",
        description: "Une chaussure dernier cri",
        price: 6000,
        images: [
          "/images/chaussure.jpg", 
          "/images/chaussure.jpg"
        ],
        reviews: []
    },
    {
        id: 5,
        name: "chaussure Élégant",
        description: "Une chaussure dernier cri",
        price: 3500,
        images: [
          "/images/chaussure.jpg", 
          "/images/chaussure.jpg"
        ],
        reviews: []
      },
];