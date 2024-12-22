import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { ActionType } from '../../../enums/action-type';

@Component({
  selector: 'app-button-section',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button-section.component.html',
  styleUrl: './button-section.component.scss',
})
export class ButtonSectionComponent implements OnInit {
  @Input() content: any;

  buttonStyles = {};

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const { backgroundColor, margin } = this.content.fields;

    this.buttonStyles = {
      'background-color': backgroundColor,
      margin,
    };
  }

  handleClick(actionType: string, target: string): void {
    if (actionType === ActionType.Navigate) {
      this.router.navigate([target]);
    } else if (actionType === ActionType.Custom) {
      alert('Thank you for your attention!');
    }
  }
}
