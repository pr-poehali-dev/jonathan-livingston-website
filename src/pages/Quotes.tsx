import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from "lucide-react";

interface Quote {
  id: number;
  text: string;
  chapter: string;
  favorite?: boolean;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: 1,
      text: "Большинство чаек не утруждает себя изучением чего-либо, кроме основных приемов полета, не пытается узнать, как долететь от берега до места, где есть пища, и обратно. Для большинства чаек главное — еда, а не полет.",
      chapter: "Часть первая",
    },
    {
      id: 2,
      text: "Чайки никогда не отрываются от земли, не дерзают парить, не знают, что такое восторг полета! Отбросить привычное, узнать новое — вот в чем смысл жизни!",
      chapter: "Часть первая",
    },
    {
      id: 3,
      text: "Он научился, наконец, летать и теперь не жалел ни о какой цене, которую за это заплатил. Джонатан-чайка открыл, что скука, страх и злоба — причины того, что жизнь чаек так коротка.",
      chapter: "Часть первая",
    },
    {
      id: 4,
      text: "Рай — это не место и не время. Рай — это быть совершенным.",
      chapter: "Часть вторая",
    },
    {
      id: 5,
      text: "Чтобы летать с быстротой мысли, то есть летать куда хочешь, нужно прежде всего понять, что ты уже прилетел...",
      chapter: "Часть третья",
    },
    {
      id: 6,
      text: "Если наша дружба зависит от таких вещей, как пространство и время, значит, мы сами разрушим наше братство в тот миг, когда преодолеем пространство и время.",
      chapter: "Часть третья",
    },
  ]);

  const toggleFavorite = (id: number) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, favorite: !quote.favorite } : quote
      )
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Цитата скопирована в буфер обмена");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Вдохновляющие цитаты
          </h1>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Мудрость из книги "Чайка по имени Джонатан Ливингстон", которая продолжает вдохновлять читателей по всему миру на поиск собственного пути и стремление к совершенству.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote) => (
            <Card
              key={quote.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                quote.favorite
                  ? "border-2 border-yellow-400 bg-yellow-50"
                  : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-blue-500 text-sm font-medium">
                  {quote.chapter}
                </div>
                <p className="text-gray-800 mb-6 text-lg italic">"{quote.text}"</p>
                <div className="flex justify-between items-center">
                  <Button
                    variant={quote.favorite ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFavorite(quote.id)}
                  >
                    {quote.favorite ? "★ Избранное" : "☆ В избранное"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(quote.text)}
                    title="Поделиться"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
