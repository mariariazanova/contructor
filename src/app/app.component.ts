import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './services/contentful.service';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TextBlockComponent,
    ImageSectionComponent,
    CtaButtonComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'constructor';
  textBlockContent: any;
  imageSectionContent: any;
  ctaButtonContent: any;
  mainContent: any;
  isLoading = true;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    // this.loadPageContent();
  }

  private loadPageContent(): void {
    // return new Observable((observer) => {
    this.contentfulService.getPageContent('Main Page').then((data) => {
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
    // .then((buttonEntry) => {
    //   observer.next(buttonEntry.fields); // Return button parameters
    //   observer.complete();
    // })
    // .catch((error) => observer.error(error));
    // });

    // this.contentfulService.getPageContent('Main Page').then((data) => {
    //   this.mainContent = data[0].fields;
    //   console.log(this.mainContent);
    //   console.log(this.mainContent.textBlock);
    //   console.log(this.mainContent.textBlock.fields);
    //   console.log(this.mainContent.textBlock.fields.button);
    //   console.log(this.mainContent.textBlock.fields.button.sys.id);
    // });
    // this.contentfulService
    //   .getEntry(this.mainContent.textBlock.fields.button.sys.id)
    //   .then((data) => {
    //     this.ctaButtonContent = data;
    //     console.log(this.ctaButtonContent);
    //   });
    // this.contentfulService.getEntries('textBlock').then((data) => {
    //   console.log('Text Block Data:', data);
    //   this.textBlockContent = data[0].fields;
    // });
    //
    // this.contentfulService.getEntries('imageSection').then((data) => {
    //   this.imageSectionContent = data[0].fields;
    // });
    //
    // this.contentfulService.getEntries('ctaButton').then((data) => {
    //   this.ctaButtonContent = data[0].fields;
    // });
  }
}
