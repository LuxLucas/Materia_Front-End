import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ListTaskComponent } from "./components/list-task/list-task.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'listTask', component: ListTaskComponent},
    {path: 'addTask', component: AddTaskComponent}
]