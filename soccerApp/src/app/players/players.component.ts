import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  joke: string = '';
readonly ROOT_URL ='https://v2.jokeapi.dev/joke/Any?safe-mode';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.generateJokes();
  }
  generateJokes(){
    this.http
    .get(this.ROOT_URL)
    .subscribe((response: any) => {
       this.joke = response.setup;
        console.log(response);
      });
  }

}
