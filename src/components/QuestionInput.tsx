
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Lightbulb } from "lucide-react";

interface QuestionInputProps {
  onSubmit: (question: string) => void;
}

const QuestionInput = ({ onSubmit }: QuestionInputProps) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
      setQuestion("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-sm"></div>
          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">What's your wild question?</h3>
            </div>
            
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="What if humans could fly? What if the sun never set?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 text-lg py-6 px-4 rounded-xl focus:border-cyan-400 focus:ring-cyan-400"
              />
              <Button
                type="submit"
                disabled={!question.trim()}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-6 py-6 rounded-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionInput;
