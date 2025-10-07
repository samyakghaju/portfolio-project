import { Brain, Code2, Database, LineChart } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost"]
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "R", "SQL", "JavaScript", "C++"]
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"]
  },
  {
    icon: LineChart,
    title: "Deep Learning",
    skills: ["CNNs", "RNNs", "Transformers", "GANs", "Transfer Learning"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-radial)' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass rounded-xl p-6 hover:glow transition-all duration-300 scroll-fade-in"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
