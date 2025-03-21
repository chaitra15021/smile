import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PmDashboardComponent } from './pm-dashboard/pm-dashboard.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { myrouteGuard } from './myroute.guard';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';

const routes: Routes = [
  {path:"login",component:AccountComponent},
  {path:'admindashboard',component:AdminDashboardComponent,
    canActivate:[myrouteGuard],data:{reqRole:['ADMIN']}} ,
  {path:'pmdashboard',component:PmDashboardComponent,
  canActivate:[myrouteGuard],data:{reqRole:['PM']}} ,
  {path:'memberdashboard',component:MemberDashboardComponent,
  canActivate:[myrouteGuard],data:{reqRole:['DEV','QA']}},
  {path:'addnewUser',component:AddnewuserComponent},
  { path: 'addnewproject', component:AddNewProjectComponent} ,
 
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
