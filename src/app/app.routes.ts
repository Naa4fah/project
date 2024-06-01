import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'Product',component:ProductComponent},
    {path:'Contact',component:ContactComponent},
    {path:'Product/:id',component:SingleComponent}

];
