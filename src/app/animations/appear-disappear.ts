import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

const ANIMATION_DURATION = '500ms ease-in-out';

export const appear = trigger('appear', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(ANIMATION_DURATION, style({ opacity: 1 })),
    // style({ opacity: 0, height: 0 }),
    // animate(ANIMATION_DURATION, style({ opacity: 1, height: '*' })),
    // style({ opacity: 0, transform: 'scale(0.2)' }),
    // animate(
    //   ANIMATION_DURATION,
    //   keyframes([
    //     style({ opacity: 0.5, transform: 'scale(0.5)', offset: 0.7 }),
    //     style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    //   ])
    // ),
  ]),
]);

export const showOn = trigger('showOn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-50%)' }),
    animate(
      ANIMATION_DURATION,
      keyframes([
        style({ opacity: 0.3, transform: 'translateY(-25%)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ])
    ),
  ]),
]);
