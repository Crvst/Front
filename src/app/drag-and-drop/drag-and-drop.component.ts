import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  standalone: true
})
export class DragDropComponent {
  @Output() fileDropped = new EventEmitter<File>();

  constructor() {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.fileDropped.emit(file);
    }
  }
}
