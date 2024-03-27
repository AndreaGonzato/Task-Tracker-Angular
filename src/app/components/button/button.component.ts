import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter()

  constructor() {
    this.color = "Green";
    this.text = "Add";
  }

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }

}
