import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlogThumbnailsComponent } from './blog-thumbnails/blog-thumbnails.component';



@NgModule({
  declarations: [BlogThumbnailsComponent],
  exports: [BlogThumbnailsComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
