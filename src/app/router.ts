import { HomeComponent } from './views/home/home.component';
import { LogonComponent } from './views/logon/logon.component';
import { PsneditComponent } from './views/psnedit/psnedit.component';
import { IndexComponent } from './views/index/index.component';
import { SalarypostComponent } from './views/salarypost/salarypost.component';

export const routers = [
    { path: '', redirectTo: '/logon', pathMatch: 'full' },
    { path: 'logon', component: LogonComponent },
    {
        path: 'views',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', component: IndexComponent },
          { path: 'psnedit', component: PsneditComponent },
          { path: 'salarypost', component: SalarypostComponent }
        ]
    }
];
