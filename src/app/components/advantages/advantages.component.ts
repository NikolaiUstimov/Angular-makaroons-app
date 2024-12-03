import {Component, Input, OnInit} from '@angular/core';
import {AdvantageInterface} from "../../interface/advantage.interface";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  @Input() advantages: AdvantageInterface[] = [];
  public textExpanded: boolean = true;

  constructor() {}

  toggleTextExpanded(): void {
    this.textExpanded = !this.textExpanded
  }

  ngOnInit(): void {
  }

}
