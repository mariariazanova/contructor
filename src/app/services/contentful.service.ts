import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: 'zyl0mwper5ct',
    accessToken: 'ppGQGW2UrtckcICOBLGq6xKoEtI4NFF_CgrN40h3d1k',
  });

  constructor() {}

  getEntry(entryId: string): Promise<Entry<any>> {
    return this.client.getEntry(entryId);
  }

  getPageContent(pageName: string): Promise<any> {
    return this.client
      .getEntries({
        content_type: 'combinedContentSectionWithSeveralImages',
        'fields.pageName': pageName,
      })
      .then((response) => {
        return response.items;
      });
  }
}
