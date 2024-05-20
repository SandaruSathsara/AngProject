import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent},
  { path: 'accessories', component: AccessoriesComponent }
];
