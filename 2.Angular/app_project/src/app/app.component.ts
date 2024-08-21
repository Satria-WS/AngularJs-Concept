import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: `<div>Test</div>`,
  styleUrl: './app.component.css',
  // styles: [`div {color:red;}`]
})
export class AppComponent {
  title = 'app_project';
}
