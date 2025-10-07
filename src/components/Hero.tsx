import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated CSS background */}
      <div className="absolute inset-0 z-0 animated-bg" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/30 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/20 blur-[100px] animate-float" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Aspiring AI/ML Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Building intelligent systems and exploring the frontiers of artificial intelligence.
            Passionate about machine learning, deep learning, and creating AI solutions that matter.
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button size="lg" className="group" onClick={() => scrollToSection('projects')}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="glass" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="#" className="p-3 rounded-full glass hover:bg-primary/10 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:bg-primary/10 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:bg-primary/10 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
