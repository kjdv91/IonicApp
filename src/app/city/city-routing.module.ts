import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilsModule } from '../components/utils/utils.module';

import { CityPage } from './city.page';

const routes: Routes = [
  {
    path: '',
    component: CityPage
  }
];

@NgModule({
  imports: [
    UtilsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityPageRoutingModule {}
