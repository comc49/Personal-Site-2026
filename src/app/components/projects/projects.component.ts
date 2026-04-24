import { Component } from '@angular/core';

interface Project {
  name: string;
  type: string;
  tags: string[];
  desc: string;
  status: 'production' | 'deployed' | 'internal';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'IEEE Xplore Digital Library',
      type: 'NgMigration',
      tags: ['Angular 11–19', 'NGXS', 'D3.js', 'WCAG 2.1 AA', 'Jest', 'Cypress'],
      desc: 'Led end-to-end migration from JSP & AngularJS to Angular 11, then drove continuous upgrades to v19. Built the full state management layer, admin panel for 300+ editors, and analytics dashboards with D3 visualizations.',
      status: 'production'
    },
    {
      name: 'Productivity Reward App',
      type: 'NgFullStack',
      tags: ['Angular', 'NestJS', 'GraphQL', 'NgRx SignalStore', 'Playwright', 'Vitest', 'Tailwind'],
      desc: 'Full-stack platform built with Angular + NestJS + GraphQL. Reactive state via NgRx SignalStore, E2E with Playwright, unit tests with Vitest. Multilingual, accessible UI via Transloco and Angular Aria. Built with Claude Code + custom MCP servers.',
      status: 'deployed'
    },
    {
      name: 'IEEE Analytics Dashboard',
      type: 'NgModule',
      tags: ['Angular Material', 'D3.js', 'FusionCharts', 'NGXS', 'Cypress'],
      desc: 'Internal analytics application featuring an interactive choropleth world map and responsive D3 bubble charts for IEEE publication data. Full test coverage with Jest and Cypress.',
      status: 'internal'
    },
    {
      name: 'Email / Search Pipeline',
      type: 'NgHybrid',
      tags: ['React', 'MJML', 'SvelteJS', '39 KB bundle'],
      desc: 'React/MJML pipeline generating mobile-responsive transactional HTML emails for IEEE. Separately, delivered a dynamic search page in SvelteJS with a total JS bundle of just 39 KB.',
      status: 'production'
    },
  ];

  statusColor(status: string): string {
    const map: Record<string, string> = {
      production: 'var(--teal)',
      deployed:   'var(--red)',
      internal:   'var(--mid)',
    };
    return map[status] ?? 'var(--mid)';
  }

  statusBorder(status: string): string {
    const map: Record<string, string> = {
      production: '#4ec9b044',
      deployed:   '#DD003144',
      internal:   '#88888844',
    };
    return map[status] ?? '#88888844';
  }
}
