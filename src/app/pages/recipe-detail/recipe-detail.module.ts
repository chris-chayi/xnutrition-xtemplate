import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipeDetailPageRoutingModule} from './recipe-detail-routing.module';

import {RecipeDetailPage} from './recipe-detail.page';
import {NutritionComponent} from '../../components/nutrition/nutrition.component';
import {SharedDirectivesModule} from 'src/app/directives/shared-directives.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipeDetailPageRoutingModule,
        SharedDirectivesModule,
    ],
    declarations: [RecipeDetailPage, NutritionComponent],
})
export class RecipeDetailPageModule {
}
