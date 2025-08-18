"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // or next/router for Next.js
import axios from "axios";

export default function ProjectDetails() {
  const { slug } = useParams(); // get slug from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/get-project/${slug}`
        );
        setProject(res.data.project); // backend returns { project: {...} }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <main
      className="min-h-screen w-full"
      style={{ fontFamily: "var(--poppins)" }}
    >
      {/* ======= HERO ======= */}
      {/* ======= HERO ======= */}
      {project.hero && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-[120%] h-[120%] -left-[10%] -top-[10%] absolute rounded-full blur-3xl"
              style={{ background: "var(--secondary)" }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">
                  {project.hero.heading}{" "}
                  <span className="text-[var(--secondary)]">
                    {project.hero.subHeading}
                  </span>
                </h1>
                <p className="mt-4 text-[var(--text-secondary)] max-w-2xl">
                  {project.shortDescription}
                </p>
                {project.hero.ctaText && (
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-white"
                      style={{ background: "var(--secondary)" }}
                    >
                      {project.hero.ctaText}
                    </a>
                  </div>
                )}
              </div>

              {project.hero.image && (
                <div className="relative">
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
                    <img
                      src={
                        project.hero.image.startsWith("http")
                          ? project.hero.image
                          : `http://localhost:5000/public/${project.hero.image}`
                      }
                      alt={project.hero.heading}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ======= OVERVIEW ======= */}
      {project.overview && (
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                Project{" "}
                <span className="text-[var(--secondary)]">Overview</span>
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                {project.overview.description}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {project.overview.image && (
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
                  <img
                    src={
                      project.overview.image.startsWith("http")
                        ? project.overview.image
                        : `http://localhost:5000/public/${project.overview.image}`
                    }
                    alt={project.overview.title || project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ======= APPROACHES ======= */}
      {project.approaches && project.approaches.length > 0 && (
        <section
          className="py-12 md:py-16"
          style={{ background: "rgba(95,205,178,0.08)" }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
              Our <span className="text-[var(--secondary)]">Approaches</span>
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.approaches.map((chip, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium ring-1 ring-black/10"
                  style={{ background: "white", color: "var(--text-primary)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======= PROBLEM & SOLUTION ======= */}
      {project.problemSolution && (
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {project.problemSolution.image && (
              <div>
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
                  <img
                    src={
                      project.problemSolution.image.startsWith("http")
                        ? project.problemSolution.image
                        : `http://localhost:5000/public/${project.problemSolution.image}`
                    }
                    alt="Problem Solution"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                  Problem
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {project.problemSolution.problem}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                  Solution
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {project.problemSolution.solution}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======= BENEFITS ======= */}
      {project.benefits && project.benefits.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
              Benefits Achieved
            </h3>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ul className="space-y-6">
                {project.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-sm shrink-0"
                      style={{ background: "var(--primary)" }}
                    >
                      ✓
                    </span>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        {b.heading}
                      </h4>
                      <p className="text-[var(--text-secondary)]">
                        {b.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {project.benefitsImage && (
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
                  <img
                    src={
                      project.benefitsImage.startsWith("http")
                        ? project.benefitsImage
                        : `http://localhost:5000/public/${project.benefitsImage}`
                    }
                    alt="Benefits collage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
