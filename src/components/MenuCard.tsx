
import { Card, CardContent } from "@/components/ui/card";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
}

export const MenuCard = ({ title, description, price, image }: MenuCardProps) => {
  return (
    <Card className="overflow-hidden border-amber-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-lg text-amber-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="text-amber-800 font-bold">{price}</div>
      </CardContent>
    </Card>
  );
};
