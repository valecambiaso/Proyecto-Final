import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from '../core/guards/session.guard';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';
const routes: Routes = [
    {path: '', canActivateChild: [SessionGuard], children: [
        {path:'list', component: InscriptionListComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class InscriptionsRoutingModule{}