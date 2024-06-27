import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { WorkspaceComponent } from "./workspace.component";
import { MenuModule } from "../components/menu/menu.module";


@NgModule({
  declarations: [
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule
  ],
  exports: [
    WorkspaceComponent
  ],
  providers: [],
  bootstrap: [WorkspaceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class WorkspaceModule { }
