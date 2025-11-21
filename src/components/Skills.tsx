import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "Flask"]
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap 5"]
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Firebase"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Linux (Ubuntu)", "Docker", "Git/GitHub", "Nginx", "Gunicorn", "Celery", "Redis"]
  },
  {
    title: "Cloud & APIs",
    skills: ["Cloud Computing", "RESTful APIs", "API Integration", "JWT Authentication"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-soft transition-smooth"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
