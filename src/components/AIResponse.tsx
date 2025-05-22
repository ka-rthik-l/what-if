
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Brain, Volume2 } from "lucide-react";

interface AIResponseProps {
  response: string;
}

const AIResponse = ({ response }: AIResponseProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < response.length) {
        setDisplayedText(response.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [response]);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(response);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-slate-800/80 backdrop-blur-sm border-purple-500/30 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">AI Analysis</h3>
          </div>
          
          {!isTyping && (
            <button
              onClick={handleSpeak}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30 text-cyan-400 hover:bg-purple-600/30 transition-all duration-300"
            >
              <Volume2 className="w-4 h-4" />
              Listen
            </button>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-200">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
            )}
          </p>
        </div>

        {!isTyping && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-lg border border-purple-500/20 animate-fade-in">
            <p className="text-sm text-gray-300 text-center italic">
              "The universe is not only stranger than we imagine, it is stranger than we can imagine." - J.B.S. Haldane
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AIResponse;
