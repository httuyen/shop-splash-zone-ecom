
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const PromoBanner = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 30
  });
  
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const totalSeconds = 
      timeRemaining.days * 24 * 60 * 60 + 
      timeRemaining.hours * 60 * 60 + 
      timeRemaining.minutes * 60 + 
      timeRemaining.seconds;
    
    const initialTotalSeconds = 3 * 24 * 60 * 60 + 8 * 60 * 60 + 45 * 60 + 30;
    
    setProgress((totalSeconds / initialTotalSeconds) * 100);
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const timeBlocks = [
    { label: "Days", value: timeRemaining.days },
    { label: "Hours", value: timeRemaining.hours },
    { label: "Minutes", value: timeRemaining.minutes },
    { label: "Seconds", value: timeRemaining.seconds }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4">Summer Sale Special</h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Limited time offer! Get up to 50% off on selected items. Don't miss out on these amazing deals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {timeBlocks.map((block, index) => (
              <div 
                key={block.label}
                className={cn(
                  "w-20 h-20 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center",
                  index < timeBlocks.length - 1 && "relative"
                )}
              >
                <span className="text-2xl font-bold">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-xs text-primary-foreground/90">
                  {block.label}
                </span>
                
                {index < timeBlocks.length - 1 && (
                  <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-xl font-bold">:</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="mb-8 max-w-md mx-auto">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-primary-foreground/90">
              <span>Sale in progress</span>
              <span>{progress.toFixed(0)}% remaining</span>
            </div>
          </div>
          
          <Button
            size="lg"
            variant="secondary"
            className="btn-hover-effect text-primary font-medium"
          >
            Shop the Sale
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
