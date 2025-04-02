
import React from "react";
import { Calendar, Award } from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "Flipkart GRiD 6.0",
    track: "Software Development Track",
    date: "2024",
    description: "Participated in Flipkart's flagship engineering campus challenge, focusing on building innovative software solutions for real-world e-commerce problems."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-secondary/30">
      <h2 className="section-heading text-center mx-auto">Experience & Hackathons</h2>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="border-l-2 border-primary pl-6 ml-6 space-y-12">
          {/* Internship */}
          <div className="relative">
            <div className="absolute -left-9 bg-white border-2 border-primary rounded-full p-1">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="flex flex-wrap justify-between items-center mb-1">
                <h3 className="text-xl font-bold text-navy">AICTE AWS Cloud Virtual Internship</h3>
                <span className="text-muted-foreground text-sm">January - March 2024</span>
              </div>
              <p className="text-muted-foreground mb-3">Cloud Engineering Intern | Remote</p>
              <div className="bg-white p-4 rounded-lg border border-border">
                <ul className="list-disc list-inside space-y-2">
                  <li>Deployed serverless applications using AWS Lambda, optimizing execution by 20%.</li>
                  <li>Managed CI/CD pipelines with GitHub Actions and AWS CodePipeline.</li>
                  <li>Designed scalable architectures on AWS EC2, S3, and RDS, reducing deployment costs by 15%.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Hackathons */}
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="relative">
              <div className="absolute -left-9 bg-white border-2 border-primary rounded-full p-1">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-navy">{hackathon.title}</h3>
                  <span className="text-muted-foreground text-sm">{hackathon.date}</span>
                </div>
                <p className="text-muted-foreground mb-3">{hackathon.track}</p>
                <div className="bg-white p-4 rounded-lg border border-border">
                  <p>{hackathon.description}</p>
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
