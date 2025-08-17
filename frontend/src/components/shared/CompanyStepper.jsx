import React from "react";

const CompanyStepper = () => {
  const steps = [
    {
      title: "Initial Consultation",

      description:
        "We discuss your project requirements and goals to understand your needs.",
    },
    {
      title: "Project Planning",

      description:
        "Our team creates a detailed project plan with timelines and deliverables.",
    },
    {
      title: "Web Development",

      description:
        "We build your website using modern technologies tailored to your business.",
    },
    {
      title: "Google Apps Script Integration",

      description:
        "We automate your workflows and enhance productivity with custom Google Apps Script solutions.",
    },
    {
      title: "Testing & Quality Assurance",

      description:
        "We thoroughly test all features to ensure everything works perfectly.",
    },
    {
      title: "Deployment & Training",

      description:
        "We launch your solution and provide training for your team.",
    },
  ];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      style={{ fontFamily: "var(--poppins)" }}
    >
      {/* Vertical line in the middle */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[var(--secondary)]"></div>

      {steps.map((step, index) => {
        const isLeft = index % 2 === 0; // alternate left/right
        return (
          <div key={index} className="relative mb-12 flex items-center w-full">
            {/* Step indicator */}
            <div className="absolute left-1/2 top-0 w-6 h-6 -translate-x-1/2 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xs z-10">
              {index + 1}
            </div>

            {/* Step content */}
            <div
              className={`w-1/2 px-6 ${
                isLeft ? "pr-10 text-right" : "pl-10 text-left ml-auto"
              }`}
            >
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-1">
                  {step.title}
                </h3>

                <p className="text-[var(--text-primary)] text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyStepper;
