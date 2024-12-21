import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [NgClass, NgIf, NgForOf, JsonPipe, NgStyle, CtaButtonComponent],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
})
export class TextBlockComponent implements OnInit {
  @Input() content: any;
  @Input() buttonContent?: any;

  textBlockStyles = {};
  textStyles = {};
  headerStyles = {};
  gradientStyle = '';

  ngOnInit(): void {
    // this.gradientConfig = this.textBlockContent.backgroundGradientConfig;
    console.log(this.content);
    console.log(this.buttonContent);

    const {
      color1 = '#ff7e5f',
      color2 = '#feb47b',
      angle = 45,
      color1Stop = '50%',
      color2Stop = '100%',
    } = this.content.backgroundGradient;
    // const {
    //
    // } = this.content.
    console.log(this.content);
    console.log(this.buttonContent);

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

    // console.log(this.textBlockStyles);
    // Set the gradient style using both color and angle
    // if (this.gradientConfig) {
    //   const { color1, color2, angle } = this.gradientConfig;
    //   this.gradientStyle = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    // }
  }

  trackByFn = (idx: number, item: any): number => idx;
}
