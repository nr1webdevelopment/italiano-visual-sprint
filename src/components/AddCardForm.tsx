
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface AddCardFormProps {
  onAddCard: (card: { italian: string; english: string; imageUrl: string }) => void;
}

const AddCardForm = ({ onAddCard }: AddCardFormProps) => {
  const [italian, setItalian] = useState("");
  const [english, setEnglish] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({ italian, english, imageUrl });
    setItalian("");
    setEnglish("");
    setImageUrl("");
  };

  return (
    <Card className="p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="italian">Italian Word</Label>
          <Input
            id="italian"
            value={italian}
            onChange={(e) => setItalian(e.target.value)}
            placeholder="e.g., Ciao"
            required
          />
        </div>
        <div>
          <Label htmlFor="english">English Translation</Label>
          <Input
            id="english"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            placeholder="e.g., Hello"
            required
          />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90">
          Add Card
        </Button>
      </form>
    </Card>
  );
};

export default AddCardForm;
