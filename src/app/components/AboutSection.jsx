"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

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
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex-shrink-0">
          <Image
            src="/images/firstImg.jpg"
            alt="hero image"
            className="absolute inset-0 object-cover rounded-full"
            layout="fill"
          />
        </div>

        <div className="mt-4 lg:mt-0 lg:ml-4 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm leading-relaxed lg:text-lg">
            A frontend web developer with a passion for creating interactive and
            responsive web applications, experienced in JavaScript, React, HTML,
            CSS, and Git, always eager to expand my knowledge and collaborate
            with others, with a love for exploring Nigeria culture, reading,
            music, and cooking. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
