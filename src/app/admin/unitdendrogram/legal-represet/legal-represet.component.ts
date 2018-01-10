import { Component, OnInit } from '@angular/core';
import { UnitdendrogramService } from '../unitdendrogram.service';

@Component({
  selector: 'app-legal-represet',
  templateUrl: './legal-represet.component.html',
  styleUrls: ['./legal-represet.component.css']
})
export class LegalRepresetComponent implements OnInit {

  constructor(
    private request: UnitdendrogramService
  ) { }

  ngOnInit() {
    console.log(this.request.SelectNode);
  }

}
