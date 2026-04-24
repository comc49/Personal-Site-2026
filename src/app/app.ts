import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  activeSection = signal('hero');
  private scrollSub?: Subscription;
  private readonly sections = ['hero', 'about', 'skills', 'experience', 'projects'];

  ngOnInit() {
    this.scrollSub = fromEvent(window, 'scroll').pipe(
      debounceTime(50),
      map(() => {
        const scrollY = window.scrollY + 100;
        let current = 'hero';
        for (const id of this.sections) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY) current = id;
        }
        return current;
      })
    ).subscribe(section => this.activeSection.set(section));
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }
}
