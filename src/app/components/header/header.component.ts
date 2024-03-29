import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TaskComponent } from '../task/task.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TaskComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task tracker';
  showAddTask: boolean =  true;
  subscription: Subscription;

  constructor(private uiService: UiService, private router:Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask=value);
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }
}
