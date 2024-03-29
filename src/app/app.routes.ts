import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', component:TaskComponent},
    {path: 'about', component:AboutComponent}

];
