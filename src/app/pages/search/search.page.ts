import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

import {SearchService} from '../../services/search/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    @ViewChild('searchBar', {static: true})
    searchBar;

    categoryRecipes: any = [];
    term: string = '';

    constructor(
        private router: Router,
        private searchService: SearchService,
        private loadingCtrl: LoadingController
    ) {
    }

    ngOnInit() {
    }

    detail({recipe}) {
        const navExtras: NavigationExtras = {
            state: recipe,
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

    handleChange(e) {
        this.term = e.target.value;
    }

    async search() {
        const loading = await this.loadingCtrl.create({
            spinner: 'crescent',
            message: `Search...${this.term}`,
        });

        loading.present();

        try {
            const result: any = await this.searchService
                .searchRecipeAPI(this.term)
                .toPromise();
            this.categoryRecipes = result?.hits;
            loading.dismiss();
            // console.log(`t=${this.categoryRecipes}`);
        } catch (error) {
            console.log(error);
            loading.dismiss();
        }
    }

    ionViewWillEnter() {
        this.searchBar.setFocus();
    }
}
