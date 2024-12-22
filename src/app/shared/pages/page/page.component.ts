import { Directive, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';

@Directive()
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
    this.contentfulService.getPageContent(this.pageName).then((data) => {
      this.mainContent = data[0].fields;
      const buttonRef =
        this.mainContent.textBlockWithButton?.[0].fields.button.sys.id;

      buttonRef
        ? this.contentfulService.getEntry(buttonRef).then((data) => {
            this.ctaButtonContent = data;
            this.isLoading = false;
          })
        : (this.isLoading = false);
    });
  }
}
