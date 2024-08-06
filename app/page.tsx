import React, { Suspense } from 'react';
import { Project } from '@/app/lib/definitions';
import * as Sentry from '@sentry/nextjs';
import Hero from './ui/sections/Home/Hero';
import RecentProjects from './ui/sections/Home/RecentProjects';
import Role from './ui/sections/Home/Role';

export default async function Page() {
  const url = process.env.NEXT_PUBLIC_URL;

  const projects = [
    {
      id: 'maps',
      type: ['All', 'Web Dev'],
      src: 'neighborhood-maps.png',
      slides: [],
      video: { url: '', id: '', width: '', height: '' },
      title: 'Neighborhood Map',
      titlelink: [
        'https://neighborhood-map-eprishb.herokuapp.com/',
        'https://neighborhood-map-neon.vercel.app/',
      ],
      githubRepo: 'https://github.com/eprisr/neighborhood-map',
      clickable: true,
      date: 'Nov 2018',
      client: 'Personal Project',
      brief:
        'Discover refreshment around every corner: Find a smoothie joint near you!',
      projdesc:
        'Maps is a smoothie locator with a predetermined list of smoothie shop locations in certain cities. This intermediate project teaches the ins and outs of React and how to use APIs. The planning of the project required a layout of the components and knowing which components rely on one another. The next problem was connecting the API to the map and getting the location pointers to match the geographical location.',
      skills: {
        Frontend: ['React', 'Sweet Alert', 'Material UI'],
        Backend: ['Node.js', 'Heroku'],
        'Relevant Packages': ['Google Maps', 'Foursquare API'],
      },
    },
  ];

  // const projects = await fetch(url + '/api/work?limit=3')
  //   .then((res) => res.json())
  //   .then((data) => data as Project[])
  //   .catch((error) => {
  //     console.error('Error Digest:', error.digest);
  //     Sentry.captureException(error);
  //     Sentry.captureMessage(
  //       'An error occured in the Projects Server Components render',
  //     );
  //     throw new Error(
  //       `An error occured in the Projects Server Components render ${error}`,
  //     );
  //   });

  return (
    <div className="main_wrapper">
      <Hero />
      <Role />
      <Suspense>
        <RecentProjects projects={projects} />
      </Suspense>
    </div>
  );
}
