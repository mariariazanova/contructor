import {Component, Directive, OnInit} from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../../components/image-section/image-section.component';
import { TextBlockComponent } from '../../components/text-block/text-block.component';

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
//   // templateUrl: './page.component.html',
//   // styleUrl: './page.component.scss',
// })
@Directive({
  // standalone: true,
})
export abstract class PageComponent implements OnInit {
  ctaButtonContent: any;
  mainContent: any;
  isLoading = true;

  protected abstract pageName: string;

  protected constructor(protected contentfulService: ContentfulService) {}

  ngOnInit() {
    this.loadPageContent();
  }

  private loadPageContent(): void {
    // return new Observable((observer) => {
    console.log(this.pageName);
    this.contentfulService.getPageContent(this.pageName).then((data) => {
      this.mainContent = data[0].fields;
      console.log(this.mainContent);
      const buttonRef =
        this.mainContent.textBlockWithButton[0].fields.button.sys.id;

      // Fetch the referenced Button entry
      this.contentfulService.getEntry(buttonRef).then((data) => {
        this.ctaButtonContent = data;
        console.log(this.ctaButtonContent);
        this.isLoading = false;
      });
    });
  }
}
