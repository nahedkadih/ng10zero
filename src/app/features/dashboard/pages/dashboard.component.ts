import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { take, takeUntil } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ConfirmModalService } from '../../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'anms-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png').default;
    
    constructor(private confirmModalService: ConfirmModalService  ,
        private translate: TranslateService ) {
         
    }

    ngOnInit() { }


    showDialog() {
        this.confirmModalService
            .showConfirm({
                text: 'Are you sure you want to remove pizza',
                title: 'Delete Pizza'
            })
            .pipe(take(1))
            .subscribe(
                result => { 
                   // result && this.store.dispatch(PizzaActions.DeletePizzaRequest({ payload: { pizzaId } }))
                }
                   
            );
    }

    
}
