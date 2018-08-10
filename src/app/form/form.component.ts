import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  movie : Movie = {
    name        : null,
    description : null,
    genre       : null,
    year        : null,
    duration    : null
  };


  constructor(private movieService: MoviesService) {
   
   }

  ngOnInit() {
  }

  SaveMovie(){
    this.movieService.save(this.movie).subscribe( 
      (data) => {
        console.log(data);
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

}
