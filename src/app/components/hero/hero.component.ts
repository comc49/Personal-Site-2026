import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { timer, interval, Subscription } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('heroLines', [
      transition(':enter', [
        query('.fade-line', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(80, animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly lineNumbers = Array.from({ length: 40 }, (_, i) => i + 1);
  readonly today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  typedText = '';
  typingDone = false;

  private readonly fullText = '"Senior Frontend Developer"';
  private sub?: Subscription;

  readonly marqueeItems = Array(4).fill([
    'ANGULAR', 'TYPESCRIPT', 'RXJS', 'NGXS', 'NGRX', 'IEEE',
    'BRICKSIMPLE', 'AIRBORNE INTERACTIVE', 'WCAG 2.1 AA', 'NX MONOREPO', 'IRVINE CA', 'UC RIVERSIDE'
  ]).flat();

  ngOnInit(): void {
    this.sub = timer(800).pipe(
      switchMap(() => interval(45).pipe(
        take(this.fullText.length + 1),
        map(i => this.fullText.slice(0, i))
      ))
    ).subscribe(val => {
      this.typedText = val;
      if (val.length === this.fullText.length) this.typingDone = true;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    }
  }
}
