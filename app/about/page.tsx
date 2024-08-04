import React from 'react';
import AboutMe from '@/app/ui/sections/About/AboutMe';
import AboutRole from '@/app/ui/sections/About/AboutRole';
import Origin from '@/app/ui/sections/About/Origin';
import Skills from '@/app/ui/sections/About/Skills';

export default function About() {
  return (
    <div className="main_wrapper">
      <AboutMe />
      <AboutRole />
      <Skills />
      <Origin />
    </div>
  );
}
