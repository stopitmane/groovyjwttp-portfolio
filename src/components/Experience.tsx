import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Mobile App Developer (Intern)",
    company: "Bincom Academy",
    location: "Yaba, Lagos",
    period: "July 2025 - Currently",
    responsibilities: [
      "Designed and developed cross-platform mobile applications using Flutter and React Native, reaching over 15,000 active users",
      "Collaborated with backend developers to integrate RESTful APIs built with Laravel and Node.js",
      "Implemented Firebase Authentication and Push Notifications for enhanced user engagement"
    ]
  },
  {
    title: "Junior Full Stack Developer",
    company: "Enerx Ltd",
    location: "Adeniyi Jones, Lagos",
    period: "Mar 2024 - Currently",
    responsibilities: [
      "Designed and developed a multi-page exhibition platform using React.js and Node.js",
      "Contributed to the John SciTec Website and assisted in building frontend features with React",
      "Authored automated test cases to ensure API reliability and adherence to project standards"
    ]
  },
  {
    title: "Backend Developer (Intern)",
    company: "DON-CLEM LTD",
    location: "Lekki, Lagos",
    period: "Feb 2025 - Jun 2025",
    responsibilities: [
      "Developed and maintained RESTful APIs using Django REST Framework for internal and client-facing systems",
      "Configured and deployed applications on Ubuntu VPS using Gunicorn and Nginx",
      "Integrated Celery and Redis for asynchronous background processing and caching"
    ]
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "New Horizons",
    location: "Ikeja, Lagos",
    period: "Jan 2023 - Aug 2023",
    responsibilities: [
      "Built a fully functional e-commerce web application using Django, React, and REST APIs",
      "Implemented responsive UI designs with HTML, CSS, and Bootstrap 5",
      "Integrated cart and checkout functionality, improving usability and conversion rates"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover:shadow-soft transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.location} • {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-card-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
