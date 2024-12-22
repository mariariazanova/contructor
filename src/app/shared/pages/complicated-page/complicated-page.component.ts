import { Directive, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';

interface PageData {
  mainContent: any;
  buttonData: any;
}

@Directive()
export abstract class ComplicatedPageComponent implements OnInit {
  mainContent: any;
  isLoading = true;
  pageData: PageData[] = [];

  protected abstract pageNames: string[];

  protected constructor(protected contentfulService: ContentfulService) {}

  ngOnInit() {
    this.loadPageContent();
  }

  private loadPageContent(): void {
    Promise.all(
      this.pageNames.map((pageName) => {
        return this.contentfulService.getPageContent(pageName).then((data) => {
          const pageContent = data[0].fields;
          const buttonRef =
            pageContent.textBlockWithButton?.[0].fields.button.sys.id;

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
            };
          }
        });
      })
    )
      .then((allPageData) => {
        allPageData.forEach((pageResult: any) => {
          this.pageData.push({
            mainContent: pageResult.mainContent,
            buttonData: pageResult.buttonData,
          });
        });

        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
      });
  }
}
