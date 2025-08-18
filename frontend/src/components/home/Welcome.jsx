import React from 'react';
function Welcome() {
  return (
    <div>
      <section className="px-[150px] grid grid-cols-2 gap-15">
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-6xl">
              Welcome to TechTri
            </h2>
            <p className="text-lg text-text-secondary">
              <span className="font-semibold underline text-text-primary">
                TechTri
              </span>{" "}
              is a is a dynamic software company dedicated to delivering
              reliable and modern web solutions. Our expertise spans Frontend &
              Backend development, Laravel, MERN Stack, WordPress, and Google
              Apps Script, enabling us to create secure, scalable, and
              user-friendly digital products. We aim to empower businesses with
              innovative technology that drives growth, strengthens their online
              presence, and helps them succeed in today’s fast-evolving digital
              world.
            </p>
          </div>
        </div>
        <div className="h-100">
          <div className="h-full">
            <video
              src="/tech tri.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl !h-full object-cover"
              aria-label="TechTri"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
