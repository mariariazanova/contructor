import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent implements OnInit {
  @Input() content: any;

  buttonStyles = {};

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    console.log(this.content);
    const { buttonPosition, backgroundColor } = this.content.fields;

    this.buttonStyles = {
      // top: buttonPosition.top,
      // left: buttonPosition.left,
      'background-color': backgroundColor,
    };
  }

  handleClick(actionType: string, target: string): void {
    console.log(actionType, target);
    if (actionType === 'navigate') {
      this.router.navigate([target]);
      // window.location.href = target;
    } else if (actionType === 'Popup') {
      console.log('Trigger popup:', target);
      // Implement popup logic here
    } else if (actionType === 'Custom') {
      console.log('Custom action triggered:', target);
      // Trigger custom event logic
    }
  }
}
