import {Component, OnInit} from '@angular/core';
import {Flower, FlowerService} from './flower.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {

  flowers$: Observable<Flower[]>;

  constructor(
    private service: FlowerService
  ) {
  }

  ngOnInit(): void {
    this.flowers$ = this.service.getAll();
  }

}
