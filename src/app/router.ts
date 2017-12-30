import { HomeComponent } from './views/home/home.component';
import { LogonComponent } from './views/logon/logon.component';
import { IndexComponent } from './views/index/index.component';
import { Page404Component } from './views/page404/page404.component';


import { SalarypostComponent } from './client/salarypost/salarypost.component';
import { PsneditComponent } from './client/psnedit/psnedit.component';
import { SalaryenteringComponent } from './client/salaryentering/salaryentering.component';

export const routers = [
    { path: '', redirectTo: '/logon', pathMatch: 'full' },
    { path: 'logon', component: LogonComponent },
    {
        path: 'views',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', component: IndexComponent }
        ]
    },
    {
        path: 'client',
        component: HomeComponent,
        children: [
          { path: 'psnedit', component: PsneditComponent },
          { path: 'salarypost', component: SalarypostComponent },
          { path: 'salaryentering', component: SalaryenteringComponent }
        ]
    },
    { path: '**', component: Page404Component }
];
