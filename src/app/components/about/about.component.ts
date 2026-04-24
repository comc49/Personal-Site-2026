import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly facts = [
    { key: 'email',     value: '"briankoo.web@gmail.com"', isStr: true  },
    { key: 'linkedin',  value: '"linkedin.com/in/koobrian"',isStr: true  },
    { key: 'location',  value: '"Irvine, CA"',             isStr: true  },
    { key: 'education', value: '"B.S. CS — UC Riverside"', isStr: true  },
    { key: 'workStyle', value: '"Full Remote / Hybrid"',   isStr: true  },
    { key: 'available', value: 'true',                     isStr: false },
  ];
}
