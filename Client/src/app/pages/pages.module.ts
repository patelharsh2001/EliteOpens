import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ActiveComponent } from "./active/active.component";
import { HomeComponent } from "./home/home.component";
import { CompleteComponent } from "./complete/complete.component";
import { PartialsModule } from "../partials/partials.module";
@NgModule({
    imports: [BrowserModule,FormsModule,PartialsModule],
    declarations:[
        ActiveComponent,
        HomeComponent,
        CompleteComponent
    ],
    exports:[
        ActiveComponent,
        HomeComponent,
        CompleteComponent,
    ]
})

export class PagesModule {}
