import { Component } from '@angular/core';

interface SlidesInterface {
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expanded-slider';
  public slides: SlidesInterface[] = [
    {
      link: 'https://images.unsplash.com/photo-1594300350232-fce90227ff2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=618&q=80',
      active: false,
    },
    {
      link: 'https://images.unsplash.com/photo-1628061794681-0750d358d555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      active: true,
    },
    {
      link: 'https://images.unsplash.com/photo-1540081986574-539e6193ba41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      active: false,
    },
    {
      link: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      active: false,
    },
    {
      link: 'https://images.unsplash.com/photo-1610088948419-28cc15f5a397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
      active: false,
    },
    {
      link: 'https://images.unsplash.com/photo-1540280369237-dea08361593a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      active: false,
    },
  ];

  public imageClicked(index: number): void {
    this.slides.forEach((slide) => {
      if (index === this.slides.indexOf(slide)) {
        slide.active = true;
      } else {
        slide.active = false;
      }
    });
  }
}
