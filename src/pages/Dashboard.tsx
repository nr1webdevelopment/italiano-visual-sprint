
import { useState } from "react";
import AddCardForm from "@/components/AddCardForm";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [cards, setCards] = useState<Array<{ italian: string; english: string; imageUrl: string }>>([]);

  const handleAddCard = (newCard: { italian: string; english: string; imageUrl: string }) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Add New Vocabulary</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AddCardForm onAddCard={handleAddCard} />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Added Cards</h2>
            {cards.map((card, index) => (
              <Card key={index} className="p-4 bg-white">
                <div className="flex items-center space-x-4">
                  <img src={card.imageUrl} alt={card.italian} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-bold text-terracotta">{card.italian}</p>
                    <p className="text-charcoal">{card.english}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
