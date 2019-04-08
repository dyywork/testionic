import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'home-detail',
    loadChildren: './home-detail/home-detail.module#HomeDetailPageModule',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot({
      
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
