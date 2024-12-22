import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../image-section/image-section.component';
import { TextBlockComponent } from '../text-block/text-block.component';
import { PageComponent } from '../../shared/page/page.component';
import { ComplicatedPageComponent } from '../../shared/complicated-page/complicated-page.component';

@Component({
  // selector: 'app-more-info-page',
  standalone: true,
  imports: [
    // NgClass,
    NgIf,
    // NgForOf,
    // JsonPipe,
    // NgStyle,
    ImageSectionComponent,
    TextBlockComponent,
    NgForOf,
  ],
  // templateUrl: '../../shared/page/page.component.html',
  // styleUrl: '../../shared/page/page.component.scss',
  templateUrl: '../../shared/complicated-page/complicated-page.component.html',
  styleUrl: '../../shared/complicated-page/complicated-page.component.scss',
})
export class DetailsPageComponent extends ComplicatedPageComponent {
  // PageComponent {
  // protected pageName = 'Details Page';
  protected pageNames = ['Details Page', 'Variety Page', 'Materials Page'];

  constructor(protected override contentfulService: ContentfulService) {
    super(contentfulService);
  }
}
