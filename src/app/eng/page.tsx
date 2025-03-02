"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from '../components/Footer';
import React from "react";
import { VideoPreview } from '../components/VideoPreview';
import { Project } from '../types';

// Update project descriptions in English
const projects: Project[] = [
  {
    "title": "Prompt School",
    "description": "Prompt School is an interactive platform that teaches prompt writing to different professional groups, children, and other users. The project uses Next.js, MongoDB, and TypeScript. Questions and learning content are created with AI support to ensure optimal learning for users.",
    "videoId": "B5oJ46l6oww",
    "techStack": ["Next.js", "MongoDB", "TypeScript", "OpenAI API"],
    "link": "https://prompt-okulu.vercel.app/"
  },
  {
    "title": "Level Assistant",
    "description": "An AI Assistant Project Developed for Level Magazine Archive. Using the complete 300-issue archive of Level magazine, an AI assistant was developed that answers user questions about the magazine and shows relevant magazine pages as sources in its answers. The user experience is based on Q&A-style content discovery and a gamification system (achievement badges and creating personal collections). The system was designed with a modular structure to be easily integrated with other similar publications.",
    "videoId": "rff1H58f-Mo",
    "techStack": ["Next.js", "OpenAI", "Amazon S3", "MongoDB", "Google Auth"],
    "link": "https://github.com/aybarsayan/level-ui"
  },
  // ... Convert other project descriptions to English ...
];

export default function Home() {
  // ... existing functions ...

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        {/* ... same structure, different text ... */}
        <div className="container max-w-6xl mx-auto px-4 z-10">
          <motion.div /* ... same props ... */>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p /* ... same props ... */>
                  AI Developer & Full Stack Developer
                </motion.p>
                <motion.h1 /* ... same props ... */>
                  Hello, I'm <br />
                  <span className="text-[#698f60]">Aybars</span>
                </motion.h1>
                <motion.p /* ... same props ... */>
                  I design and develop modern and user-friendly web experiences.
                </motion.p>
                <motion.div className="flex gap-4">
                  <motion.a /* ... same props ... */>
                    See My Projects
                  </motion.a>
                  <motion.a /* ... same props ... */>
                    <span>Download CV</span>
                    {/* ... same icon ... */}
                  </motion.a>
                </motion.div>
              </div>
              {/* ... same image section ... */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div /* ... same props ... */>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-700">Scroll</span>
            <motion.div className="w-px h-12 bg-[#698f60]/30"></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container max-w-6xl mx-auto px-4">
          {/* About Section */}
          <motion.div
            id="about"
            /* ... same props ... */
          >
            <motion.h2 /* ... same props ... */>
              ABOUT ME
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.p className="text-gray-700 leading-relaxed text-left">
                  Since starting Electrical and Electronics Engineering at Konya Technical University in 2020, 
                  my interest in software and technology has continuously grown. Specializing in JavaScript and Python, 
                  I work in artificial intelligence, deep learning, blockchain, and computer vision.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed mt-4 text-left">
                  Since 2021, I have been working as Developer Relations Assistant and JavaScript Bot Developer 
                  for KILT Protocol at Berlin-based BOTLabs GmbH. I have authored books on "Covalent API", 
                  "Algorand Technologies with Algorand SDK and Pyteal", "Building Tomorrow", and "Camino Network".
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed mt-4 text-left">
                  I created "web3ogren.com" platform, establishing a free technology education resource reaching 
                  100,000 monthly visitors. Since early 2024, I have been providing LLM development consultancy 
                  to AivisionTech, developing AI solutions in healthcare technologies, and receiving TÜBİTAK 1507 
                  SME R&D support for this project.
                </motion.p>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Areas of Expertise</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg /* ... same icon ... */ />
                      <span>AI & Deep Learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg /* ... same icon ... */ />
                      <span>Full Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg /* ... same icon ... */ />
                      <span>Blockchain Technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Title */}
          <motion.p /* ... same props ... */>
            FEATURED PROJECTS
          </motion.p>

          <motion.h2 /* ... same props ... */>
            Recent Work
          </motion.h2>

          {/* ... rest of the project section with same structure ... */}
        </div>
      </section>

      <Footer variant="eng" />
    </div>
  );
} 