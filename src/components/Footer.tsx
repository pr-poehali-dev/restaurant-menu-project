
export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Домашний ресторан</h3>
            <p className="mb-4">Место, где вкусно и уютно</p>
            <p>© 2023 Домашний ресторан. Все права защищены.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Адрес: ул. Примерная, 123</p>
            <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
            <p>Email: info@restaurant.ru</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <p className="mb-2">Пн-Пт: 10:00 - 22:00</p>
            <p className="mb-2">Сб-Вс: 11:00 - 23:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
