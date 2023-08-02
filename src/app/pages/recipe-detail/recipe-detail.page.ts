import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    recipe: any = {};
    isActive: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.getRecipe();
    }

    getRecipe() {
        this.recipe = this.router.getCurrentNavigation().extras.state;
    }

    seeNutrition() {
        this.isActive = !this.isActive;
    }
}
