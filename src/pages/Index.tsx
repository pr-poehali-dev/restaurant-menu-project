
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/MenuCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-amber-800/90 to-amber-700/90 flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto text-center px-4 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Домашний ресторан</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Насладитесь вкусными блюдами в атмосфере домашнего уюта</p>
            <Button size="lg" className="text-lg px-8 py-6">Забронировать столик</Button>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Наше меню</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b border-amber-200 pb-2">Горячие напитки</h3>
                <div className="space-y-4">
                  <MenuCard 
                    title="Чай" 
                    description="Ароматный чай с добавлением трав и специй"
                    price="120 ₽"
                  />
                  <MenuCard 
                    title="Кофе" 
                    description="Свежесваренный кофе из отборных зерен"
                    price="150 ₽"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b border-amber-200 pb-2">Выпечка</h3>
                <div className="space-y-4">
                  <MenuCard 
                    title="Рулет люкс" 
                    description="Нежный сдобный рулет с изысканной начинкой"
                    price="280 ₽"
                  />
                  <MenuCard 
                    title="Кексы" 
                    description="Домашние кексы с добавлением изюма и цукатов"
                    price="150 ₽"
                  />
                  <MenuCard 
                    title="Сахарная булочка" 
                    description="Воздушная булочка с карамельной корочкой"
                    price="49,99 ₽"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b border-amber-200 pb-2">Салаты</h3>
                <div className="space-y-4">
                  <MenuCard 
                    title="Салат с помидорами и огурцами" 
                    description="Свежие овощи с заправкой на выбор"
                    price="89,99 ₽"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b border-amber-200 pb-2">Закуски</h3>
                <div className="space-y-4">
                  <MenuCard 
                    title="Огурец" 
                    description="Свежие хрустящие огурцы"
                    price="90 ₽"
                  />
                  <MenuCard 
                    title="Помидор" 
                    description="Сочные спелые помидоры"
                    price="110 ₽"
                  />
                  <MenuCard 
                    title="Коровка печенье" 
                    description="Традиционное печенье с молочным вкусом"
                    price="39,99 ₽"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Интерьер ресторана" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-amber-900">О нашем ресторане</h2>
                <p className="text-gray-700 mb-4">
                  Наш ресторан предлагает уютную атмосферу и вкусные блюда, приготовленные с любовью и вниманием к деталям. Мы используем только свежие ингредиенты высочайшего качества.
                </p>
                <p className="text-gray-700 mb-6">
                  Приходите к нам с семьей и друзьями, чтобы насладиться великолепной кухней и провести время в тёплой обстановке.
                </p>
                <Button variant="outline" className="border-amber-700 text-amber-800 hover:bg-amber-100">Узнать больше</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
