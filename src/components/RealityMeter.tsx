
import { useEffect, useState } from "react";
import { Gauge } from "lucide-react";

interface RealityMeterProps {
  score: number; // 0-100
}

const RealityMeter = ({ score }: RealityMeterProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 500);

    return () => clearTimeout(timer);
  }, [score]);

  const getRealityLevel = (score: number) => {
    if (score <= 20) return { label: "Pure Fantasy", color: "from-pink-500 to-purple-500" };
    if (score <= 40) return { label: "Highly Unlikely", color: "from-purple-500 to-blue-500" };
    if (score <= 60) return { label: "Theoretically Possible", color: "from-blue-500 to-cyan-500" };
    if (score <= 80) return { label: "Scientifically Plausible", color: "from-cyan-500 to-green-500" };
    return { label: "Almost Certain", color: "from-green-500 to-yellow-500" };
  };

  const realityLevel = getRealityLevel(score);

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Gauge className="w-6 h-6 text-cyan-400" />
          <h3 className="text-xl font-semibold text-white">Reality Meter</h3>
        </div>

        {/* Meter Background */}
        <div className="relative h-8 bg-slate-700 rounded-full overflow-hidden mb-4">
          {/* Animated Fill */}
          <div
            className={`h-full bg-gradient-to-r ${realityLevel.color} transition-all duration-2000 ease-out rounded-full relative`}
            style={{ width: `${animatedScore}%` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
          </div>
          
          {/* Score indicator */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-slate-800 transition-all duration-2000 ease-out"
            style={{ left: `calc(${animatedScore}% - 8px)` }}
          ></div>
        </div>

        {/* Labels */}
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>Impossible</span>
          <span>Certain</span>
        </div>

        {/* Reality Level Display */}
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">
            <span className={`bg-gradient-to-r ${realityLevel.color} bg-clip-text text-transparent`}>
              {animatedScore}%
            </span>
          </div>
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${realityLevel.color} bg-opacity-20 border border-current`}>
            <span className={`font-semibold bg-gradient-to-r ${realityLevel.color} bg-clip-text text-transparent`}>
              {realityLevel.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealityMeter;
