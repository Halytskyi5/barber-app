import { Component } from '@angular/core';
import {format } from 'date-fns';
import { OnInit } from '@angular/core';
import {uk} from 'date-fns/locale/uk';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-general-page',
  imports: [
    MatIconModule
  ],
  templateUrl: './general-page.html',
  styleUrl: './general-page.scss'
})
export class GeneralPage implements OnInit {
  date: string = format(new Date(), 'dd MMMM', { locale: uk });
  ngOnInit(): void {
  }

}
