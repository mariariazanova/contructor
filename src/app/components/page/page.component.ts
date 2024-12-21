import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../image-section/image-section.component';
import { TextBlockComponent } from '../text-block/text-block.component';

// @Component({
//   selector: 'app-page',
//   standalone: true,
//   imports: [
//     NgClass,
//     NgIf,
//     NgForOf,
//     JsonPipe,
//     NgStyle,
//     ImageSectionComponent,
//     TextBlockComponent,
//   ],
//   templateUrl: './complicated-page.component.html',
//   styleUrl: './complicated-page.component.scss',
// })
// export class ComplicatedPageComponent implements OnInit {
//   ctaButtonContent: any;
//   mainContent: any;
//   isLoading = true;
//
//   constructor(private contentfulService: ContentfulService) {}
//
//   ngOnInit() {
//     this.loadPageContent();
//   }
//
//   private loadPageContent(): void {
//     // return new Observable((observer) => {
//     this.contentfulService.getPageContent('Main Page').then((data) => {
//       this.mainContent = data[0].fields;
//       console.log(this.mainContent);
//       const buttonRef =
//         this.mainContent.textBlockWithButton[0].fields.button.sys.id;
//
//       this.contentfulService.getEntry(buttonRef).then((data) => {
//         this.ctaButtonContent = data;
//         console.log(this.ctaButtonContent);
//         this.isLoading = false;
//       });
//     });
//   }
// }
