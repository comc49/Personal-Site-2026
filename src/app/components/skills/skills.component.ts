import { Component } from '@angular/core';

interface SkillColumn {
  label: string;
  items: { name: string; desc: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly columns: SkillColumn[] = [
    {
      label: 'frameworks',
      items: [
        { name: 'Angular v11–21', desc: 'Primary' },
        { name: 'React',          desc: 'Proficient' },
        { name: 'Vue 2/3',        desc: 'Proficient' },
        { name: 'AngularJS',      desc: 'Legacy' },
        { name: 'SvelteJS',       desc: 'Experienced' },
      ]
    },
    {
      label: 'state_reactive',
      items: [
        { name: 'NGXS',            desc: 'Primary' },
        { name: 'NgRx',            desc: 'Expert' },
        { name: 'RxJS',            desc: 'Expert' },
        { name: 'Angular Signals', desc: 'v17+' },
        { name: 'Redux',           desc: 'React' },
      ]
    },
    {
      label: 'languages_styling',
      items: [
        { name: 'TypeScript',       desc: 'Primary' },
        { name: 'JavaScript ES6+',  desc: 'Expert' },
        { name: 'SCSS / Sass',      desc: 'Expert' },
        { name: 'HTML5',            desc: 'Semantic' },
        { name: 'Tailwind CSS',     desc: 'Experienced' },
      ]
    },
    {
      label: 'tooling_testing',
      items: [
        { name: 'Jest',               desc: 'Unit' },
        { name: 'Cypress / Playwright',desc: 'E2E' },
        { name: 'Vitest',             desc: 'Unit' },
        { name: 'Webpack / Gulp',     desc: 'Build' },
        { name: 'Nx Monorepo',        desc: 'Workspace' },
      ]
    },
  ];
}
