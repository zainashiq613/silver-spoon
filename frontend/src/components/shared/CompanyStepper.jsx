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
    <div className="px-4 sm:px-6 md:px-8 lg:px-[150px]">
      {/* ===== Mobile / Tablet (sm + md) ===== */}
      <div className="lg:hidden relative py-6">
        {/* Left vertical line */}
        <div className="absolute left-4 sm:left-5 md:left-6 top-0 h-full w-[2px] bg-[var(--secondary)]" />

        <div className="ml-10 sm:ml-12 md:ml-16">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-8 sm:mb-12 md:mb-14">
              {/* Dot */}
              <div className="absolute -left-6 sm:-left-7 md:-left-8 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--primary)] border-2 border-white shadow" />

              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
                <h3 className="text-text-primary text-base sm:text-lg md:text-xl font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Desktop (lg and up) – UNTOUCHED ===== */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[var(--secondary)]"></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative mb-16 flex w-full">
                {/* Step indicator */}
                <div className="absolute left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-sm font-semibold z-10">
                  {index + 1}
                </div>

                {/* Step content */}
                <div
                  className={`w-1/2 px-6 flex ${
                    isLeft ? "justify-end pr-10" : "justify-start pl-10 ml-auto"
                  }`}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md w-full hover:scale-107 duration-500 transition-all">
                    <h3 className="text-text-primary text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyStepper;
