import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">О книге "Чайка по имени Джонатан Ливингстон"</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Чайка в полете" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">История создания</h2>
                <p className="text-gray-700">
                  "Чайка по имени Джонатан Ливингстон" — повесть-притча, написанная Ричардом Бахом и опубликованная в 1970 году. Первоначально издатели отвергли рукопись, но позже книга стала бестселлером и была переведена на десятки языков мира.
                </p>
                <p className="text-gray-700">
                  Бах утверждал, что история пришла к нему как видение. Он услышал голос, который произнёс название книги, и после этого написал её.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12 animate-fade-in">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Философия произведения</h2>
            <p className="text-gray-700 mb-4">
              Книга представляет духовное путешествие главного героя — чайки Джонатана, который стремится к совершенству в полёте вопреки консервативным взглядам своей стаи. Джонатан отвергает обыденность и посвящает себя освоению высшего мастерства.
            </p>
            <p className="text-gray-700 mb-4">
              Произведение затрагивает темы самосовершенствования, свободы выбора, преодоления ограничений, духовного развития и поиска смысла жизни.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
              "Цель жизни — найти совершенство и показать его людям."
            </blockquote>
            <p className="text-gray-700">
              Книга стала своеобразным манифестом для многих людей, ищущих свой путь и стремящихся преодолеть установленные обществом ограничения.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Влияние и наследие</h2>
            <p className="text-gray-700 mb-4">
              "Чайка по имени Джонатан Ливингстон" стала культовым произведением и повлияла на целое поколение читателей. По мотивам книги был снят фильм, созданы музыкальные произведения и даже основаны философские течения.
            </p>
            <p className="text-gray-700 mb-4">
              Несмотря на небольшой объем, книга содержит глубокие философские мысли, которые остаются актуальными и по сей день.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild className="transition ease-in-out hover:scale-105">
                <Link to="/characters">Узнать о персонажах</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;