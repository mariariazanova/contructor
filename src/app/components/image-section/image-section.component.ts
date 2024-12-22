import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe, NgForOf, NgIf, NgStyle } from '@angular/common';

interface ImageStyle {
  width: string;
  top: string;
  left: string;
}

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [NgIf, NgForOf, JsonPipe, NgStyle],
  templateUrl: './image-section.component.html',
  styleUrl: './image-section.component.scss',
})
export class ImageSectionComponent implements OnInit {
  @Input() content: any;

  imageStyles: ImageStyle[] = [];

  ngOnInit(): void {
    console.log(this.content);
    this.content.forEach((image: any) => {
      const { imagePosition, imageWidth, isImageFront } = image.fields;

      this.imageStyles.push({
        width: imageWidth,
        top: imagePosition?.top || '0px',
        left: imagePosition?.left || '0px',
        ...(isImageFront && { 'z-index': 1 }),
      });
    });
    console.log(this.imageStyles);
  }

  trackByFn = (idx: number, item: any): number => idx;
}
