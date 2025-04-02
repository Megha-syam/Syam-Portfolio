
import React from "react";
import { CheckCircle } from "lucide-react";

const skills = [
  "React", "Django", "JavaScript", "Node.js",
  "Python", "SQL", "MongoDB", "AWS",
  "Spring Boot", "Git", "Data Analytics", "JSF"
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <h2 className="section-heading">About Me</h2>
          <div className="space-y-4 mt-6">
            <p className="text-lg">
              I'm a highly motivated 3rd year Computer Science student with hands-on experience in web development 
              and cloud technologies. A strong team player with excellent problem-solving skills and a passion for technology, 
              eager to contribute as a Software Engineer by solving complex challenges.
            </p>
            <p className="text-lg">
              Currently pursuing my Bachelor of Technology degree at KL University, Vijayawada 
              with a CGPA of 9.62, I focus on building scalable applications and leveraging data analytics 
              to create meaningful solutions.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="bg-white p-4 rounded-lg border border-border">
                <h4 className="font-bold">BACHELOR OF TECHNOLOGY</h4>
                <p className="text-muted-foreground">Computer Science and Engineering • 9.62 CGPA</p>
                <div className="flex justify-between mt-1">
                  <p>KL University, Vijayawada</p>
                  <p className="text-muted-foreground">2022-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="bg-white p-6 rounded-lg shadow-md border border-border h-full">
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C, Java, Python</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML, CSS, JavaScript</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>SQL, NoSQL</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
