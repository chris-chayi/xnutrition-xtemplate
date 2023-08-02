import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'recipes/:category',
        loadChildren: () =>
            import('./pages/recipes/recipes.module').then((m) => m.RecipesPageModule),
    },
    {
        path: 'recipes/recipe-detail/:slug',
        loadChildren: () =>
            import('./pages/recipe-detail/recipe-detail.module').then(
                (m) => m.RecipeDetailPageModule
            ),
    },
    {
        path: 'search',
        loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
