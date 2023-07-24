import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       query('.screen-container', [
  //         style({ opacity: 0, transform: 'scale(0.8)' }),
  //         stagger(200, [
  //           animate(
  //             '0.5s',
  //             keyframes([
  //               style({ opacity: 0, transform: 'scale(0.8)', offset: 0 }),
  //               style({ opacity: 0.6, transform: 'scale(1.1)', offset: 0.6 }),
  //               style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
  //             ])
  //           ),
  //         ]),
  //       ]),
  //     ]),
  //   ]),
  // ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}