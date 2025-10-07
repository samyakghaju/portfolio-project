import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer",
    description: "Deep learning project implementing artistic style transfer using convolutional neural networks. Transforms photos into artworks inspired by famous painters.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
    github: "#",
    demo: "#"
  },
  {
    title: "Sentiment Analysis Model",
    description: "NLP model trained on social media data to classify sentiment. Achieved 94% accuracy using transformer-based architecture and fine-tuning techniques.",
    tags: ["NLP", "Transformers", "BERT"],
    github: "#",
    demo: "#"
  },
  {
    title: "Predictive Maintenance System",
    description: "Machine learning system that predicts equipment failures using time-series data. Reduces downtime by 40% through early anomaly detection.",
    tags: ["Time-Series", "Random Forest", "IoT"],
    github: "#",
    demo: "#"
  },
  {
    title: "Object Detection Pipeline",
    description: "Real-time object detection system using YOLO architecture. Optimized for edge devices with efficient model compression techniques.",
    tags: ["YOLO", "Computer Vision", "Edge AI"],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent AI/ML projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="glass border-border/50 hover:glow transition-all duration-300 scroll-fade-in"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="glass">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="glass">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
