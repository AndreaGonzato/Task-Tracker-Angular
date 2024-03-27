import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskItemComponent } from '../task-item/task-item.component';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks:Task[] = TASKS;
}
