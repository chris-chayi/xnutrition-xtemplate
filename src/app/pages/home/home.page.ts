import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    recipes = [
        {
            recipe: 'fish',
            featuredImage: '../../assets/images/Fish.jpg',
        },
        {
            recipe: 'chicken',
            featuredImage: '../../assets/images/Chicken.jpg',
        },
        {
            recipe: 'beef',
            featuredImage: '../../assets/images/Beef.jpg',
        },
        {
            recipe: 'juice',
            featuredImage: '../../assets/images/Fruit.jpg',
        },
        {
            recipe: 'vegan',
            featuredImage: '../../assets/images/Vegan.jpg',
        },
        {
            recipe: 'salad',
            featuredImage: '../../assets/images/Salad.jpg',
        },
    ];

    constructor(private router: Router) {
    }

    goTo({recipe}) {
        // console.log(`${recipe}`);
        this.router.navigate([`/recipes/${recipe}`]);
    }

    search() {
        this.router.navigate([`/search/`]);
    }
}
