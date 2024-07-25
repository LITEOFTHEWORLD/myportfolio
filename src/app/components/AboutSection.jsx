"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { GiLaptop } from "react-icons/gi";

const AboutSection = () => {
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <GiLaptop style={{ fontSize: "300px" }} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm leading-relaxed lg:text-lg">
            A frontend web developer with a passion for creating interactive and
            responsive web applications, experienced in JavaScript, React, HTML,
            CSS, and Git, always eager to expand my knowledge and collaborate
            with others, with a love for exploring Nigeria&apos;s culture,
            reading, music, and cooking. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
