import { Component, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  menus = signal<any[]> ([
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        router: 'dashboard',
        selected: true
      },

      {
        label: 'List Task',
        icon: 'pi pi-list',
        router: 'listTask',
        selected: false
      },

      {
        label: 'Add Task',
        icon: 'pi pi-plus-circle',
        router: 'addTask',
        selected: false
      }
  ]);

  selectedMenu(index: number){
    this.menus.update(menus => {
      menus.forEach((m,i) => (m.selected = index === i));
      return menus;
    });
  }

}
