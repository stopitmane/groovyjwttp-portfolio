const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="bg-card rounded-xl p-8 md:p-10 shadow-card border border-border">
          <p className="text-lg leading-relaxed text-card-foreground">
            Full Stack Developer specializing in Python, Django, and modern JavaScript frameworks, 
            with extensive experience building, deploying, and maintaining scalable, high-performance 
            web applications. Skilled in RESTful API design, frontend integration, and server optimization 
            on Ubuntu VPS environments. Proficient in integrating Celery, Redis, Gunicorn, and Nginx for 
            efficient background processing and production-ready deployments. Adept at collaborating with 
            cross-functional teams to deliver secure, maintainable, and user-focused software solutions 
            across the entire development stack.
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Location:</strong> Lagos, Nigeria
            </p>
            <p className="text-muted-foreground mt-2">
              <strong className="text-foreground">Education:</strong> B.Tech in Biomedical/Medical Engineering, 
              Federal University of Technology, Akure (FUTA)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
