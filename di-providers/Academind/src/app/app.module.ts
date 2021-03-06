import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectableService } from './shared/collectable.service';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CollectableService], // global
  bootstrap: [AppComponent]
})
export class AppModule { }
