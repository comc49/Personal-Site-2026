import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() activeSection = 'hero';

  readonly tabs = [
    { id: 'hero',       label: 'hero.component.ts' },
    { id: 'about',      label: 'about.ts' },
    { id: 'skills',     label: 'skills.config.ts' },
    { id: 'experience', label: 'experience.service.ts' },
    { id: 'projects',   label: 'projects.module.ts' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
