import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BasepageComponent } from "./basepage/basepage.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule],
    declarations:[
        HeaderComponent,
        BasepageComponent,
        FooterComponent
        
    ],
    exports:[
        
        HeaderComponent,
        BasepageComponent,
        FooterComponent
        
    ]
})

export class PartialsModule {}