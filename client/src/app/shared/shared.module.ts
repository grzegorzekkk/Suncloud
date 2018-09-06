import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbCollapseModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ConfirmDialogComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
