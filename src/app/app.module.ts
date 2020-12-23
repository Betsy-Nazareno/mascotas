import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Routes, RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MainComponent } from "./main/main.component";

const rutas: Routes = [{ path: "", component: MainComponent }];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ],
  declarations: [AppComponent, HelloComponent, MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
