
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface FlashCardProps {
  italian: string;
  english: string;
  imageUrl: string;
}

const FlashCard = ({ italian, english, imageUrl }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full max-w-md cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <Card className="w-full p-6 bg-white rounded-xl shadow-lg">
          <div className={`${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img src={imageUrl} alt={italian} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-bold text-terracotta text-center mb-2">{italian}</h2>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center rotate-y-180 backface-hidden ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <p className="text-2xl text-charcoal text-center">{english}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlashCard;
