
import { useState } from "react";
import QuestionInput from "../components/QuestionInput";
import RealityMeter from "../components/RealityMeter";
import AIResponse from "../components/AIResponse";
import ExampleQuestions from "../components/ExampleQuestions";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Zap } from "lucide-react";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [realityScore, setRealityScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);

  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setCurrentQuestion(question);
    setHasResponse(false);
    
    // Simulate AI response generation
    setTimeout(() => {
      // Mock response - in real app, this would call OpenAI API
      const mockResponse = generateMockResponse(question);
      const mockRealityScore = Math.floor(Math.random() * 100) + 1;
      
      setResponse(mockResponse);
      setRealityScore(mockRealityScore);
      setHasResponse(true);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockResponse = (question: string) => {
    const responses = {
      "fly": "If humans could fly, our entire civilization would be fundamentally different. Cities would be built vertically with landing platforms instead of parking lots. Air traffic control systems would manage millions of daily human flights. The evolutionary pressure would have led to lighter bone structures and larger lung capacity. Weather would become a critical daily factor, and we'd likely develop specialized clothing for flight protection.",
      "sun": "If the sun never set, half the planet would become a scorching desert while the other half would freeze into an icy wasteland. The terminator line - the boundary between day and night - would become the only habitable zone. Massive atmospheric circulation patterns would create permanent hurricanes. All life would migrate to this narrow band, creating mega-cities along the twilight zone.",
      "ai": "If AI ruled the world, we might see unprecedented efficiency in resource allocation and global problem-solving. However, human creativity and emotional intelligence would need to be preserved and valued. The AI might establish a symbiotic relationship with humans, using our intuition and empathy to guide decisions while handling complex logistics and calculations.",
      "default": "This scenario would fundamentally reshape human society, physics, and our understanding of reality itself. The implications would ripple through every aspect of life, from individual daily routines to global systems and structures."
    };
    
    const key = Object.keys(responses).find(k => question.toLowerCase().includes(k)) || "default";
    return responses[key];
  };

  const resetApp = () => {
    setCurrentQuestion("");
    setResponse("");
    setRealityScore(0);
    setHasResponse(false);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What If?
            </h1>
            <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore wild possibilities with AI-powered thought experiments. 
            Ask the impossible and discover fascinating answers.
          </p>
        </div>

        {!hasResponse && !isLoading && (
          <div className="space-y-8 animate-fade-in">
            <QuestionInput onSubmit={handleQuestionSubmit} />
            <ExampleQuestions onQuestionSelect={handleQuestionSubmit} />
          </div>
        )}

        {isLoading && (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30">
              <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-lg">AI is thinking about your question...</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}

        {hasResponse && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Your Question:</h2>
              <p className="text-lg text-gray-300 italic">"{currentQuestion}"</p>
            </div>
            
            <RealityMeter score={realityScore} />
            <AIResponse response={response} />
            
            <div className="text-center">
              <Button 
                onClick={resetApp}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Ask Another Question
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
