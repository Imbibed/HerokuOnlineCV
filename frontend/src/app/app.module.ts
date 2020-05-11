import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './arch-components/header-component/header-component.component';
import { AsideLeftComponent } from './arch-components/aside-left/aside-left.component';
import { MainContentComponent } from './arch-components/main-content/main-content.component';
import { AsideRightComponent } from './arch-components/aside-right/aside-right.component';
import { WindowResizeSensitiveDirective } from './directives/window-resize-sensitive.directive';
import { FooterComponentComponent } from './arch-components/footer-component/footer-component.component';
import { ArticleComponent } from './details-components/article/article.component';
import { LangageDropdownComponent } from './details-components/langage-dropdown/langage-dropdown.component';
import { DisablerightclickDirective } from './directives/disablerightclick.directive';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

/*export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AsideLeftComponent,
    MainContentComponent,
    AsideRightComponent,
    WindowResizeSensitiveDirective,
    FooterComponentComponent,
    ArticleComponent,
    LangageDropdownComponent,
    DisablerightclickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [/*services*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
