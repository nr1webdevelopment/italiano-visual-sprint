import { useState } from "react";
import FlashCard from "@/components/FlashCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      italian: "Ciao",
      english: "Hello",
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    },
    {
      italian: "Gatto",
      english: "Cat",
      imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    },
    {
      italian: "Cane",
      english: "Dog",
      imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    },
    {
      italian: "Casa",
      english: "House",
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    },
    {
      italian: "Libro",
      english: "Book",
      imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646",
    },
    {
      italian: "Pane",
      english: "Bread",
      imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
    },
    {
      italian: "Acqua",
      english: "Water",
      imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
    },
    {
      italian: "Caffè",
      english: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e",
    },
    {
      italian: "Pizza",
      english: "Pizza",
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      italian: "Pasta",
      english: "Pasta",
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    },
    {
      italian: "Vino",
      english: "Wine",
      imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
    },
    {
      italian: "Sole",
      english: "Sun",
      imageUrl: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba",
    },
    {
      italian: "Luna",
      english: "Moon",
      imageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
    },
    {
      italian: "Mare",
      english: "Sea",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      italian: "Montagna",
      english: "Mountain",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    }
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-3xl font-bold text-charcoal">Study Italian Vocabulary</h1>
          <div className="w-full max-w-md">
            <FlashCard {...cards[currentCardIndex]} />
          </div>
          <Button onClick={nextCard} className="bg-terracotta hover:bg-terracotta/90">
            Next Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
