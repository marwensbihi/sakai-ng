import { Component } from '@angular/core';


interface keywords{
  post :string,
  skills :string,
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})



export class MatchesComponent {
  keywords: any

}
