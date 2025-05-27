import { Component, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  menus = signal<any[]> ([
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        selected: true
      },

      {
        label: 'List Task',
        icon: 'pi pi-list',
        selected: false
      },

      {
        label: 'Add Task',
        icon: 'pi pi-plus-circle',
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
