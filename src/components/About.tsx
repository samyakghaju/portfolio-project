export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an aspiring AI/ML engineer with a deep passion for creating intelligent systems 
              that can learn, adapt, and solve complex problems. My journey into artificial intelligence 
              began with a fascination for how machines can understand and process information like humans.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm focused on mastering machine learning algorithms, deep learning architectures, 
              and natural language processing. I believe in learning by building, and I constantly work on 
              projects that challenge me to apply theoretical concepts to real-world problems.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not training models or debugging neural networks, you'll find me exploring the 
              latest research papers, contributing to open-source projects, or experimenting with new 
              AI frameworks and tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
