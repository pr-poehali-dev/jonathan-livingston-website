import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  quotes: string[];
  traits: string[];
}

const Characters = () => {
  const [activeTab, setActiveTab] = useState("main");
  
  const characters: Character[] = [
    {
      id: "jonathan",
      name: "Джонатан Ливингстон",
      role: "Главный герой",
      description: "Чайка, отвергнувшая ограничения своей стаи. Джонатан стремится к совершенству в полёте и самопознанию, преодолевая физические и духовные границы.",
      quotes: [
        "Совершенство не имеет пределов!",
        "Чайки, которые смутно представляют себе, зачем они живут, живут долго.",
        "Ты сам выбираешь свой мир и сам прокладываешь свой путь."
      ],
      traits: ["Целеустремленный", "Свободолюбивый", "Мудрый", "Вдохновляющий"]
    },
    {
      id: "chiang",
      name: "Чианг",
      role: "Наставник",
      description: "Старейшая чайка, которая обучает Джонатана высшим принципам полёта и существования. Символизирует мудрость и духовное руководство.",
      quotes: [
        "Небо — это не место и не время. Небо — это совершенство.",
        "Ты должен понять, что чайка — это неограниченная идея свободы, образ твоего тела от кончика одного крыла до кончика другого — всего лишь мысль."
      ],
      traits: ["Просветленный", "Терпеливый", "Мудрый", "Духовный учитель"]
    },
    {
      id: "fletcher",
      name: "Флетчер Линд",
      role: "Ученик",
      description: "Молодая чайка, изгнанная из своей стаи, которая становится первым учеником Джонатана. Символизирует продолжение традиции и передачу знаний.",
      quotes: [
        "Я не хочу быть просто чайкой. Я хочу познать границы возможного.",
        "Можно любить и быть свободным одновременно!"
      ],
      traits: ["Способный", "Упрямый", "Преданный", "Развивающийся"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-blue-900">Персонажи</h1>
        <p className="text-center text-blue-700 mb-8">Ключевые персонажи произведения "Чайка по имени Джонатан Ливингстон"</p>
        
        <Tabs defaultValue="main" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="main">Главные</TabsTrigger>
            <TabsTrigger value="secondary">Второстепенные</TabsTrigger>
            <TabsTrigger value="symbolic">Символические</TabsTrigger>
          </TabsList>
          
          <TabsContent value="main" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => (
                <Card key={character.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="bg-blue-700 text-white">
                    <CardTitle>{character.name}</CardTitle>
                    <CardDescription className="text-blue-100">{character.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">{character.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-blue-800">Черты:</h4>
                      <div className="flex flex-wrap gap-2">
                        {character.traits.map((trait, i) => (
                          <Badge key={i} variant="secondary">{trait}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-800">Цитаты:</h4>
                      <ul className="space-y-2">
                        {character.quotes.map((quote, i) => (
                          <li key={i} className="italic text-sm bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                            "{quote}"
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="secondary" className="min-h-[400px] flex items-center justify-center">
            <div className="text-center p-8 bg-white/60 rounded-lg shadow-sm">
              <h3 className="text-2xl font-medium text-blue-800 mb-4">Второстепенные персонажи</h3>
              <p className="text-blue-700">
                Среди второстепенных персонажей: родители Джонатана, Старейшина стаи и другие чайки из Стаи Завтрака.
                Каждый из них играет свою роль в развитии главного героя и общей философии произведения.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="symbolic" className="min-h-[400px] flex items-center justify-center">
            <div className="text-center p-8 bg-white/60 rounded-lg shadow-sm">
              <h3 className="text-2xl font-medium text-blue-800 mb-4">Символические персонажи</h3>
              <p className="text-blue-700">
                Стая в целом символизирует общество с его правилами и ограничениями.
                Небо и полёт становятся символами свободы и духовного развития.
                В книге каждый персонаж имеет философский подтекст, отражающий идеи автора о самосовершенствовании и поиске смысла жизни.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Characters;