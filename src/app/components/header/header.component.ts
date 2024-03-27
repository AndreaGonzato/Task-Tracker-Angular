import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TaskComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task tracker';

  toggleAddTask(){
    console.log("toggle");
  }
}
