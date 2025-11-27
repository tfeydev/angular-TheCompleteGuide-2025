import { Component, Input, inject } from '@angular/core';
import { type TaskI } from './task.model';
import { DatePipe } from '@angular/common';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskI;
  private tasksService = inject(TasksService);
  
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
