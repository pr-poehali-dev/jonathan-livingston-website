import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SeagullAnimation from "@/components/SeagullAnimation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <SeagullAnimation />
        
        <div className="max-w-4xl mx-auto relative z-1">
          <section className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-primary animate-fade-in">Чайка по имени Джонатан Ливингстон</h1>
            <h2 className="text-3xl text-muted-foreground mb-8">Ричард Бах</h2>
            
            <div className="flex gap-8 mb-12">
              <div className="w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Чайка на фоне моря" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="w-2/3">
                <p className="text-lg mb-4">
                  «Чайка по имени Джонатан Ливингстон» — повесть-притча, написанная Ричардом Бахом. 
                  Рассказывает о чайке, учившейся жизни и искусству полёта. Главная тема книги — поиск смысла жизни, 
                  и стремление к совершенству вопреки косности окружающего мира.
                </p>
                <p className="text-lg mb-4">
                  Эта книга стала настоящим литературным прорывом в своё время и до сих пор остаётся одним из самых 
                  вдохновляющих произведений мировой литературы. Она рассказывает историю чайки, которая стремится 
                  к совершенству в полёте и преодолевает ограничения своей стаи.
                </p>
                <div className="mt-6">
                  <Button asChild className="mr-4">
                    <Link to="/about">Узнать больше</Link>
                  </Button>
                  <Button variant="outline">
                    <Link to="/quotes">Цитаты из книги</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Основные идеи произведения</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Свобода</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Свобода выбирать свой собственный путь и не следовать за стаей, если вы чувствуете, что существует нечто большее.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Совершенство</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Стремление к совершенству и преодоление собственных ограничений — это путь к истинному счастью.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Наставничество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Передача знаний другим и помощь им в раскрытии их собственного потенциала является истинным предназначением.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Об авторе</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-6 items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Ричард Бах" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ричард Бах</h3>
                    <p className="mb-4">
                      Американский писатель, философ и публицист. Пилот, автор популярных произведений о полётах.
                      Наиболее известен как автор повести-притчи «Чайка по имени Джонатан Ливингстон» и книги «Иллюзии, или Приключения Мессии, который Мессией быть не хотел».
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <footer className="bg-primary/10 py-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Чайка по имени Джонатан Ливингстон | Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;