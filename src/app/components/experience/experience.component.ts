import { Component } from '@angular/core';

interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  color: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  readonly jobs: Job[] = [
    {
      company: 'IEEE',
      location: 'Piscataway, NJ (Full Remote)',
      role: 'Senior Web Developer',
      period: 'Aug 2018 – May 2025',
      color: '#0e76bc',
      points: [
        'Spearheaded migration of IEEE Xplore Digital Library from JSP & AngularJS to Angular 11, establishing foundational CSS architecture, state management, and service layer.',
        'Led Angular upgrade from v11 to v19, collaborating with QA to ensure regression-free releases across all production environments.',
        'Implemented mobile-responsive pages driving more traffic growth in 2019 than the previous 3 years combined.',
        'Architected admin panel enabling management of publication analytics access for 300+ editors-in-chief.',
        'Built internal analytics app using Angular, D3.js, FusionCharts, Jest, Cypress, and NGXS — including choropleth world map and D3 bubble chart.',
        'Achieved WCAG 2.1 AA compliance across IEEE Xplore, improving screen reader compatibility and ADA conformance.',
        'Implemented React/MJML pipeline for mobile-responsive transactional emails; delivered dynamic search page in SvelteJS at 39 KB total bundle.',
        'Migrated Gulp build to Webpack — 30% improvement in build times. Migrated AngularJS project to Vue.js — 20%+ reduction in bundle size.',
        'Mentored new hires on Angular, RxJS, Flexbox, D3.js, and Angular CLI.',
      ]
    },
    {
      company: 'BrickSimple',
      location: 'Doylestown, PA (Full Remote)',
      role: 'Web Application Developer',
      period: 'Jun 2017 – Aug 2018',
      color: '#f47421',
      points: [
        'Engineered a responsive fantasy football website using React/Redux, Bulma.io, and ES6.',
        'Built a responsive job bidding website using Angular 4, HammerJS, and PrimeNG.',
        'Implemented hospital search functionality using the Google Maps library.',
        'Added new features to a Vue.js web app with data visualization using D3.js and Chart.js.',
        'Used CSS animations to create smooth transitions and improve perceived load time.',
      ]
    },
    {
      company: 'Airborne Interactive',
      location: 'Lake Forest, CA',
      role: 'Junior Application Developer',
      period: 'Feb 2015 – Jul 2016',
      color: '#5b8dd9',
      points: [
        'Implemented front-end features in QML and JavaScript for In-Flight Entertainment systems communicating with Panasonic and Lufthansa hardware via RESTful APIs.',
      ]
    },
  ];
}
