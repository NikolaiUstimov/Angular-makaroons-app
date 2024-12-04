import {Component, Input, OnInit} from '@angular/core';
import {AdvantageInterface} from "../../interface/advantage.interface";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  @Input() advantages: AdvantageInterface[] = [];
  public textExpanded: { [key: number]: boolean } = {};

  constructor() {}

  toggleTextExpanded(index: number): void {
    this.textExpanded[index] = !this.textExpanded[index];
  }

  ngOnInit(): void {
  }

}
