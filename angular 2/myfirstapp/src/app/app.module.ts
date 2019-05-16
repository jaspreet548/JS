import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasicDirective } from './directives/basic-directive/basic-directive';
import { BasicBetterDirective } from './directives/basic-better-directive/basic-better-directive';
import { LoggingService } from './services/logging.service';
import { ChildLoggingService } from './services/ChildLogging.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicDirective,
    BasicBetterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChildLoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
