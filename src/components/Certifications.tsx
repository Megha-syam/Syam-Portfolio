
import React from "react";
import { CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [

  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024",
    icon: <Award className="h-12 w-12 text-yellow-600" />,
    color: "border-yellow-200 bg-yellow-50"
  },
  {
    id: 2,
    name: "Red Hat Certified Enterprise Application Developer (EX183)",
    issuer: "Red Hat",
    date: "September 2024",
    icon: <Award className="h-12 w-12 text-red-600" />,
    color: "border-red-200 bg-red-50"
  },
  {
    id: 3,
    name: "FinTech Professional Certificate",
    issuer: "FinTech Institute",
    date: "July 2024",
    icon: <Award className="h-12 w-12 text-blue-600" />,
    color: "border-blue-200 bg-blue-50"
  },
  {
    id: 4,
    name: "ServiceNow Certified System Adminstrator",
    issuer: "ServiceNow",
    date: "June 2025",
    icon: <Award className="h-12 w-12 text-green-600" />,
    color: "border-green-200 bg-green-50"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-heading text-center mx-auto">Certifications</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Professional certifications that validate my expertise and knowledge in different areas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {certifications.map((cert) => (
          <Card key={cert.id} className={`overflow-hidden border-2 ${cert.color}`}>
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="shrink-0">{cert.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{cert.name}</h3>
                <div className="flex items-center mt-1 text-muted-foreground">
                  <span className="mr-4">{cert.issuer}</span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-600" /> {cert.date}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
