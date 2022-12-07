import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
})
export class RecepiesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'chocolate cake',
      'best cake ever',
      'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
