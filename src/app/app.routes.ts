import { Routes } from '@angular/router';
import { ListViewComponent } from './feature/list/components/list-view/list-view.component';
import { CreateComponent } from './feature/create/component/create/create.component';


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: "overview" },
    { path: 'overview', component: ListViewComponent },
    { path: 'create', component: CreateComponent }
];
