import { Routes } from '@angular/router';
import { ListViewComponent } from './feature/list/components/list-view/list-view.component';


export const routes: Routes = [
    { path: '', component: ListViewComponent },
    { path: 'overview', component: ListViewComponent },
    { path: '**', redirectTo: '' }
];
