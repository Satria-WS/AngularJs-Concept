import { Component } from '@angular/core';
import { PipexComponent } from '../pipex/pipex.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent-to-child',
  standalone: true,
  imports: [PipexComponent , CommonModule],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.css',
})
export class ParentToChildComponent {


  myCar = 'Mitsubishi';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(newItem);
  }
}
