import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type UserI } from './user.model';
import { Card } from '../shared/card/card';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card]
})
export class User {
  @Input({ required: true }) user!: UserI;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
