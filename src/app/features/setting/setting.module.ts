import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { LazyElementsModule } from '@angular-extensions/elements';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { tap, take, distinctUntilChanged, filter } from 'rxjs/operators';
import { EventService } from '../../core/services';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { SettingRoutingModule } from './setting-routing.module';
import { SettingContainerComponent } from './pages/setting-container.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/`,
        '.json'
    );
}

@NgModule({
  declarations: [SettingContainerComponent],
    imports: [CommonModule, SharedModule, SettingRoutingModule,

        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            isolate: false
        }) 
    ]
})
 
export class SettingModule {
    constructor( private readonly translateService: TranslateService,
        private readonly evnService: EventService) {
        this.evnService.getLanguage().subscribe((language) => {
            let slang = language;
           
            if (language['value']) {
                slang = language['value']
            }
            
            this.translateService.use(slang)
        });
        
    }
}
