
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/get-project/${slug}`
        );
        setProject(res.data.project);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--secondary)]"></div>
      </div>
    );

  if (!project)
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Project not found
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          The project you're looking for doesn't exist or may have been removed.
        </p>
      </div>
    );

  return (
    <main
      className="min-h-screen w-full overflow-hidden"
      style={{ fontFamily: "var(--poppins)" }}
    >
      {/* ======= HERO ======= */}
      {project.hero && (
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-[120%] h-[120%] -left-[10%] -top-[10%] absolute rounded-full blur-3xl"
              style={{ background: "var(--secondary)" }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div>
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4"
                  style={{ background: "var(--secondary)", color: "white" }}
                >
                  Featured Project
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--text-primary)] leading-tight">
                  {project.hero.heading}{" "}
                  <span className="text-[var(--secondary)]">
                    {project.hero.subHeading}
                  </span>
                </h1>
                <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl">
                  {project.shortDescription}
                </p>
                {project.hero.ctaText && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
                      style={{ background: "var(--secondary)" }}
                    >
                      {project.hero.ctaText}
                      <FiArrowRight className="ml-2" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[var(--secondary)] text-[var(--secondary)]"
                      >
                        Visit Live Site
                        <FiExternalLink className="ml-2" />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>

              {project.hero.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
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
                  {project.techStack && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center">
                      <div className="flex space-x-2">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-[var(--text-primary)]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs font-medium text-[var(--text-secondary)]">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ======= PROJECT NAVIGATION ======= */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4">
            {["overview", "problem", "benefits"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "text-[var(--secondary)] border-b-2 border-[var(--secondary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ======= MAIN CONTENT ======= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* ======= OVERVIEW ======= */}
        {activeTab === "overview" && project.overview && (
          <motion.section
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Project{" "}
                <span className="text-[var(--secondary)]">Overview</span>
              </h2>
              <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.overview.description}
              </p>

              {project.stats && (
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {project.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    >
                      <p className="text-sm text-[var(--text-secondary)]">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-[var(--secondary)]">
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div variants={item} className="order-1 lg:order-2">
              {project.overview.image && (
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-lg">
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
            </motion.div>
          </motion.section>
        )}

        {/* ======= PROBLEM & SOLUTION ======= */}
        {activeTab === "problem" && project.problemSolution && (
          <motion.section
            initial="hidden"
            animate="show"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={item}>
              <div className="sticky top-24">
                {project.problemSolution.image && (
                  <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-lg">
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
                )}
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100 text-red-600 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                    The Challenge
                  </h3>
                </div>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {project.problemSolution.problem}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100 text-green-600 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                    Our Solution
                  </h3>
                </div>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {project.problemSolution.solution}
                </p>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* ======= BENEFITS ======= */}
        {activeTab === "benefits" &&
          project.benefits &&
          project.benefits.length > 0 && (
            <motion.section
              initial="hidden"
              animate="show"
              variants={container}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <motion.div variants={item} className="space-y-2">
                <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                  Benefits{" "}
                  <span className="text-[var(--secondary)]">Achieved</span>
                </h3>
                <p className="text-lg text-[var(--text-secondary)] max-w-lg">
                  The measurable outcomes and positive impacts delivered by this
                  project
                </p>

                <motion.ul className="mt-8 space-y-8">
                  {project.benefits.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={item}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <span
                        className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-lg shrink-0 shadow-md"
                        style={{ background: "var(--primary)" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-xl font-semibold text-[var(--text-primary)]">
                          {b.heading}
                        </h4>
                        <p className="mt-2 text-[var(--text-secondary)]">
                          {b.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div variants={item}>
                {project.benefitsImage && (
                  <div className="sticky top-24">
                    <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-lg">
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
                  </div>
                )}
              </motion.div>
            </motion.section>
          )}

        {/* ======= GALLERY ======= */}
        
             

        {/* ======= APPROACHES ======= */}
        {project.approaches && project.approaches.length > 0 && (
          <section
            className="mt-16 py-12 px-6 rounded-3xl"
            style={{ background: "rgba(95,205,178,0.08)" }}
          >
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                Our <span className="text-[var(--secondary)]">Approach</span>
              </h3>
              <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
                The methodologies and strategies that drove this project's
                success
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                {project.approaches.map((chip, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
                    style={{
                      background: "white",
                      color: "var(--text-primary)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}