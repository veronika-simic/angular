import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  /* by default not all properties are accessible by other components we have to be explicit about it */
  /* in order to do this we use decorators  */
  @Input() element: { type: string; content: string; name: string };
  /* now this components property element is accessible to any component that uses it */
}
