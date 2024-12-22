import { Component } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { PageComponent } from '../../shared/pages/page/page.component';
import { appear } from '../../animations/appear-disappear';
import { pageImports } from '../../imports/page-imports';

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: '../../shared/pages/page/page.component.html',
  animations: [appear],
})
export class MainPageComponent extends PageComponent {
  protected pageName = 'Main Page';

  constructor(protected override contentfulService: ContentfulService) {
    super(contentfulService);
  }
}
