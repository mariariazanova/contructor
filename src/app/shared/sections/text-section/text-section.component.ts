import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSectionComponent } from '../button-section/button-section.component';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [CommonModule, ButtonSectionComponent],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
})
export class TextSectionComponent implements OnInit {
  @Input() content: any;
  @Input() buttonContent?: any;

  textBlockStyles = {};
  textStyles = {};
  headerStyles = {};
  gradientStyle = '';

  ngOnInit(): void {
    const {
      color1 = '#ff7e5f',
      color2 = '#feb47b',
      angle = 45,
      color1Stop = '50%',
      color2Stop = '100%',
    } = this.content.backgroundGradient;

    this.gradientStyle = `linear-gradient(${angle}deg, ${color1} ${color1Stop}, ${color2} ${color2Stop})`;
    this.textBlockStyles = {
      background: this.gradientStyle,
      width: this.content.textBlockWidth,
      height: this.content.textBlockHeight,
      margin: this.content.textBlockMargin,
      padding: this.content.textBlockPadding,
      gap: this.content.textBlockGap,
      color: this.content.textColor,
      'text-align': this.content.textAlign,
      'align-self': this.content.textPosition,
    };

    this.headerStyles = {
      width: this.content.headerWidth,
      'text-align': this.content.textAlign,
      'align-self': this.content.textPosition,
    };

    this.textStyles = {
      width: this.content.textWidth,
      'text-align': this.content.textAlign,
      'align-self': this.content.textPosition,
    };
  }

  trackByFn = (idx: number): number => idx;
}
