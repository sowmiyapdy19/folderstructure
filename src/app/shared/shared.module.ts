import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';



@NgModule({
  declarations: [HeadercomponentComponent, FootercomponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeadercomponentComponent,FootercomponentComponent
  ]
})
export class SharedModule { }
