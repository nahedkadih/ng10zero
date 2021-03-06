import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NavigationEnd, NavigationStart,  RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/shared/pages/page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from 'src/app/shared/pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from 'src/app/shared/pages/contact-us/contact-us.component';
import { AuthGuard } from './core/services/auth-guard';
import { catchError, delay, tap, map } from 'rxjs/operators';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { EventService } from 'src/app/core/services';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { HomeComponent } from 'src/app/features/home/pages/home.component';
import { HomeService } from 'src/app/features/home/home.service';

const routes: Routes = [
    
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }, 
  {
    path: 'auth',
    loadChildren: () => import('./features/account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then((m) => m.ProductsModule)
  } 
  , 
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./features/setting/setting.module').then(m => m.SettingModule)
      .catch(() => location.reload())
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      .catch(() => location.reload())
  }
  , {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
    {
        path: 'notfound',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [
        RouterModule.forRoot(routes, {
            //enableTracing: true,
            useHash: true,
            scrollPositionRestoration: 'enabled',
            //preloadingStrategy: SelectivePreloadingStrategyService,
             preloadingStrategy: PreloadAllModules,
            onSameUrlNavigation: 'reload',
            urlUpdateStrategy: "eager" 
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
   // private logger: Logger; private router: Router,
    
    constructor(private router: Router, private evnService: EventService) {
        router.events.subscribe((event) => {
            
            if (event instanceof NavigationStart) {
                //console.log('NavigationStart '+this.router.url);
                evnService.showBar();
            }
            if (event instanceof RouteConfigLoadStart) {
                
            }

            if (event instanceof RouteConfigLoadEnd) {
                  
            }

            if (event instanceof NavigationEnd) {
                //console.log('NavigationStart ' +this.router.url);
                of('dummy').pipe(delay(200)).subscribe(val => {
                    evnService.hideBar();
                });
                document.querySelector('meta[property=og\\:url').setAttribute('content', window.location.href);
            }
        });
        //this.logger = loggerFactory.createLogger(AppRoutingModule, NgxLoggerLevel.OFF);
    }
}
