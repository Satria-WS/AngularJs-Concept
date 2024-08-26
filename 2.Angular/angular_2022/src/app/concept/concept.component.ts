import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-concept',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.css',
})
export class ConceptComponent {}
