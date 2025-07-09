import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Доска из ореха премиум",
      price: 3500,
      material: "Орех",
      size: "40×30×2 см",
      image: "/img/486b89ff-68d7-4a44-be26-229b1e0ce258.jpg",
      description:
        "Элегантная доска из натурального ореха с красивой текстурой",
    },
    {
      id: 2,
      name: "Набор бамбуковых досок",
      price: 2200,
      material: "Бамбук",
      size: "Набор 3 шт",
      image: "/img/35e30585-58b0-48d1-ac0f-a26524ec3698.jpg",
      description: "Экологичный набор из трех досок разного размера",
    },
    {
      id: 3,
      name: "Коллекция деревянных досок",
      price: 4800,
      material: "Дуб, вишня, бук",
      size: "Набор 4 шт",
      image: "/img/67ca2cfe-0069-4ac9-a308-52b92dcc2374.jpg",
      description: "Уникальная коллекция досок из разных пород дерева",
    },
  ];

  const addToCart = (product: (typeof products)[0]) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Великолепная доска! Качество дерева потрясающее, очень удобная в использовании.",
    },
    {
      name: "Михаил П.",
      rating: 5,
      text: "Заказывал набор для ресторана. Все доски идеально подошли, персонал доволен.",
    },
    {
      name: "Екатерина В.",
      rating: 4,
      text: "Красивая доска, но доставка заняла больше времени, чем ожидалось.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" size={32} className="text-amber-700" />
              <h1 className="text-2xl font-bold text-amber-900">
                Доски & Дерево
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#reviews"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button
              variant="outline"
              className="relative border-amber-300 text-amber-700 hover:bg-amber-50"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Натуральные разделочные доски
          </h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Создаем уютную атмосферу на вашей кухне с досками из экологически
            чистых материалов
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-amber-200 text-amber-800">
              <Icon name="Leaf" size={16} className="mr-1" />
              Натуральные материалы
            </Badge>
            <Badge variant="secondary" className="bg-amber-200 text-amber-800">
              <Icon name="Award" size={16} className="mr-1" />
              Ручная работа
            </Badge>
            <Badge variant="secondary" className="bg-amber-200 text-amber-800">
              <Icon name="Truck" size={16} className="mr-1" />
              Быстрая доставка
            </Badge>
          </div>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Наш каталог
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-amber-200"
              >
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-amber-900 mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-amber-700 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <Badge
                      variant="outline"
                      className="border-amber-300 text-amber-700"
                    >
                      {product.material}
                    </Badge>
                    <span className="text-sm text-amber-600">
                      {product.size}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      className="bg-amber-600 hover:bg-amber-700"
                      onClick={() => addToCart(product)}
                    >
                      <Icon name="Plus" size={16} className="mr-2" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Отзывы покупателей
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} className="text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900">
                        {review.name}
                      </h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-amber-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-amber-100 to-orange-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-8">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-amber-700 mb-4" />
              <h4 className="font-semibold text-amber-900 mb-2">Телефон</h4>
              <p className="text-amber-700">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-amber-700 mb-4" />
              <h4 className="font-semibold text-amber-900 mb-2">Email</h4>
              <p className="text-amber-700">info@boards-wood.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-amber-700 mb-4" />
              <h4 className="font-semibold text-amber-900 mb-2">Адрес</h4>
              <p className="text-amber-700">г. Москва, ул. Деревянная, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="p-6 border-b border-amber-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-900">Корзина</h3>
                <Button variant="ghost" onClick={() => setCartOpen(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-amber-700 text-center">Корзина пуста</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-amber-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-amber-900">
                          {item.name}
                        </h4>
                        <p className="text-amber-700">
                          {item.price.toLocaleString()} ₽ × {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-amber-900">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-amber-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-amber-900">
                        Итого:
                      </span>
                      <span className="text-xl font-bold text-amber-900">
                        {getTotalPrice().toLocaleString()} ₽
                      </span>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="ChefHat" size={24} className="text-amber-200" />
            <h4 className="text-xl font-bold">Доски & Дерево</h4>
          </div>
          <p className="text-amber-200 mb-4">
            Создаем уютную атмосферу на вашей кухне с натуральными материалами
          </p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Instagram"
              size={24}
              className="text-amber-200 hover:text-white cursor-pointer"
            />
            <Icon
              name="Phone"
              size={24}
              className="text-amber-200 hover:text-white cursor-pointer"
            />
            <Icon
              name="Mail"
              size={24}
              className="text-amber-200 hover:text-white cursor-pointer"
            />
          </div>
          <p className="text-amber-300 text-sm mt-4">
            © 2024 Доски & Дерево. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
