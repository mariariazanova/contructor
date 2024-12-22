import { Component, Directive, OnInit } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../../components/image-section/image-section.component';
import { TextBlockComponent } from '../../components/text-block/text-block.component';
import { map } from 'rxjs';
import { Entry } from 'contentful';

interface PageData {
  mainContent: any;
  buttonData: any;
}

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
//   // templateUrl: './complicated-page.component.html',
//   // styleUrl: './complicated-page.component.scss',
// })
@Directive({
  // standalone: true,
})
export abstract class ComplicatedPageComponent implements OnInit {
  ctaButtonContent: any;
  mainContent: any;
  isLoading = true;
  pageData: PageData[] = [];

  // protected abstract pageName: string;
  protected abstract pageNames: string[];

  protected constructor(protected contentfulService: ContentfulService) {}

  ngOnInit() {
    this.loadPageContent();
  }

  private loadPageContent(): void {
    console.log(this.pageNames);

    Promise.all(
      this.pageNames.map((pageName) => {
        return this.contentfulService.getPageContent(pageName).then((data) => {
          const pageContent = data[0].fields;
          console.log(pageName, pageContent);
          const buttonRef =
            pageContent.textBlockWithButton?.[0].fields.button.sys.id;
          console.log(buttonRef);

          if (buttonRef) {
            return this.contentfulService
              .getEntry(buttonRef)
              .then((buttonData) => {
                return {
                  pageName,
                  mainContent: pageContent,
                  buttonData,
                };
              });
          } else {
            return {
              pageName,
              mainContent: pageContent,
              // buttonData: {},
            };
          }
        });
      })
    )
      .then((allPageData) => {
        console.log('All page data loaded', allPageData);

        // this.pageData = {};

        allPageData.forEach((pageResult: any) => {
          console.log(
            'Page Data for',
            pageResult.pageName,
            pageResult.mainContent,
            pageResult.buttonData
          );
          this.pageData.push({
            mainContent: pageResult.mainContent,
            buttonData: pageResult.buttonData,
          });
        });

        this.isLoading = false;
        console.log(this.pageData);
      })
      .catch((error) => {
        console.error('Error fetching page data:', error);
        this.isLoading = false;
      });
    // this.pageNames.forEach(pageName => {})
    // this.contentfulService.getPageContent(this.pageName).then((data) => {
    //   this.mainContent = data[0].fields;
    //   console.log(this.mainContent);
    //   const buttonRef =
    //     this.mainContent.textBlockWithButton?.[0].fields.button.sys.id;
    //
    //   buttonRef
    //     ? this.contentfulService.getEntry(buttonRef).then((data) => {
    //         this.ctaButtonContent = data;
    //         console.log(this.ctaButtonContent);
    //         this.isLoading = false;
    //       })
    //     : (this.isLoading = false);
    // });
  }
}
