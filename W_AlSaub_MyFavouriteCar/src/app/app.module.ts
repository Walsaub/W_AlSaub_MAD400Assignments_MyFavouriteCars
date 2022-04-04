import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilteredByTypePipe } from './filtered-by-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from "@angular/common/http";import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./CarService/in-memory-data.service";
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DialogAddContentComponent } from './dialog-add-content/dialog-add-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilteredByTypePipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
    DialogAddContentComponent
  ],
  entryComponents: [DialogAddContentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
