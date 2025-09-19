import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
