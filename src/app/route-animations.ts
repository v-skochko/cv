import {animate, group, query, style, transition, trigger} from '@angular/animations';


export let slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right'))

  ]);

function slideTo(direction) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        // top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('300ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('300ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({[direction]: '0%'}))
      ])
    ])

  ];
}
