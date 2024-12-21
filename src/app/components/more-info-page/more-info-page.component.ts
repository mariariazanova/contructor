import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../image-section/image-section.component';
import { TextBlockComponent } from '../text-block/text-block.component';
import { PageComponent } from '../../shared/page/page.component';

@Component({
  selector: 'app-more-info-page',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    JsonPipe,
    NgStyle,
    ImageSectionComponent,
    TextBlockComponent,
  ],
  templateUrl: '../../shared/page/page.component.html',
  styleUrl: '../../shared/page/page.component.scss',
})
export class MoreInfoPageComponent extends PageComponent {
  protected pageName = 'More Info Page';
  // ctaButtonContent: any;
  // mainContent: any;
  // isLoading = true;

  constructor(protected override contentfulService: ContentfulService) {
    super(contentfulService);
  }

  // ngOnInit() {
  //   this.loadPageContent();
  // }
  //
  // private loadPageContent(): void {
  //   // return new Observable((observer) => {
  //   this.contentfulService.getPageContent('Main Page').then((data) => {
  //     this.mainContent = data[0].fields;
  //     console.log(this.mainContent);
  //     const buttonRef =
  //       this.mainContent.textBlockWithButton[0].fields.button.sys.id;
  //
  //     // Fetch the referenced Button entry
  //     this.contentfulService.getEntry(buttonRef).then((data) => {
  //       this.ctaButtonContent = data;
  //       console.log(this.ctaButtonContent);
  //       this.isLoading = false;
  //     });
  //   });
  // }
}
