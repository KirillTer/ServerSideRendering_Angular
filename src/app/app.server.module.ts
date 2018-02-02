import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ServerTransferStateModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule {}
