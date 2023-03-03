import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';
import { HeaderComponent } from "../components/header/header.component";
import { UtilsModule } from '../components/utils/utils.module';

@NgModule({
    declarations: [CityPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CityPageRoutingModule,
        UtilsModule
       
    ]
})
export class CityPageModule {}
