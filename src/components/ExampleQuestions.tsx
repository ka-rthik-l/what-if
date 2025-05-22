
import { Button } from "@/components/ui/button";
import { Rocket, Sun, Bot, Zap, Globe, Clock } from "lucide-react";

interface ExampleQuestionsProps {
  onQuestionSelect: (question: string) => void;
}

const ExampleQuestions = ({ onQuestionSelect }: ExampleQuestionsProps) => {
  const questions = [
    {
      icon: Rocket,
      text: "What if humans could fly?",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sun,
      text: "What if the sun never set?",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Bot,
      text: "What if AI ruled the world?",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      text: "What if electricity didn't exist?",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      text: "What if gravity was twice as strong?",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      text: "What if time moved backwards?",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Need Inspiration?</h3>
        <p className="text-gray-300">Try one of these mind-bending questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map((question, index) => {
          const Icon = question.icon;
          return (
            <Button
              key={index}
              onClick={() => onQuestionSelect(question.text)}
              className={`group relative h-auto p-6 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600 hover:border-slate-500 text-left transition-all duration-300 hover:scale-105 rounded-xl`}
              variant="outline"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${question.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-br ${question.gradient} bg-clip-text text-transparent`} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium leading-relaxed group-hover:text-cyan-300 transition-colors duration-300">
                    {question.text}
                  </p>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${question.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ExampleQuestions;
