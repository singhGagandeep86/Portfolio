import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'privacy', component: PrivacyComponent}
];
