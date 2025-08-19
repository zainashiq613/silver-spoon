import React from "react";

function Welcome() {
  return (
    <div className="pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16">
      {" "}
      {/* Reduced top padding */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[150px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex items-center order-1">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-primary font-bold text-4xl sm:text-5xl lg:text-6xl">
              Welcome to TechTri
            </h2>
            <p className="text-base md:text-lg text-text-secondary">
              <span className="font-semibold underline text-text-primary">
                TechTri
              </span>{" "}
              is a dynamic software company dedicated to delivering reliable and
              modern web solutions. Our expertise spans Frontend & Backend
              development, Laravel, MERN Stack, WordPress, and Google Apps
              Script, enabling us to create secure, scalable, and user-friendly
              digital products. We aim to empower businesses with innovative
              technology that drives growth, strengthens their online presence,
              and helps them succeed in today's fast-evolving digital world.
            </p>
          </div>
        </div>

        {/* Video Content */}
        <div className="order-2 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-full">
          <div className="h-full w-full">
            <video
              src="/tech tri.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl lg:rounded-2xl w-full h-full object-cover"
              aria-label="TechTri"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
