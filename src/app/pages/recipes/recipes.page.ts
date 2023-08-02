import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {recipes} from '../../services/shared/data';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    params: string;
    categoryRecipes = [];
    images = [];

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.params = this.route.snapshot.params['category'];
        this.getRecipes();
    }

    getRecipes() {
        this.categoryRecipes = recipes[this.params]?.hits;
        this.images = recipes[this.params]?.staticImage;
    }


    detail({recipe}, i) {
        const navExtras: NavigationExtras = {
            state: {...recipe, staticImage: this.images[i]},
        };

        const slug = this.parameterize(recipe.label);
        this.router.navigate([`/recipes/recipe-detail/${slug}`], navExtras);
    }

    parameterize(string) {
        return string
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 -]/, '')
            .replace(/\s/g, '-');
    }
}
