
import { useState } from "react";
import FlashCard from "@/components/FlashCard";
import Navbar from "@/components/Navbar";

const Index = () => {
  // Example cards - in a real app, this would come from a database
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
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    },
    {
      italian: "Cibo",
      english: "Food",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    },
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
