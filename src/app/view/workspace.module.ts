import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { WorkspaceComponent } from "./workspace.component";


@NgModule({
  declarations: [
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    WorkspaceComponent
  ],
  providers: [],
  bootstrap: [WorkspaceComponent]
  
})
export class WorkspaceModule { }
