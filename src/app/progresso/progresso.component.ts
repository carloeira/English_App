import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {
  @Input('progressRes') public progresso: number = 0
  constructor() {}
}
