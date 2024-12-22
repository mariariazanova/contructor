import { Component } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { ComplicatedPageComponent } from '../../shared/pages/complicated-page/complicated-page.component';
import { showOn } from '../../animations/appear-disappear';
import { pageImports } from '../../imports/page-imports';

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl:
    '../../shared/pages/complicated-page/complicated-page.component.html',
  animations: [showOn],
})
export class DetailsPageComponent extends ComplicatedPageComponent {
  protected pageNames = ['Details Page', 'Variety Page', 'Materials Page'];

  constructor(protected override contentfulService: ContentfulService) {
    super(contentfulService);
  }
}
