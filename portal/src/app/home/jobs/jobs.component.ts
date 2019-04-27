import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/shared.interface';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  totalJobs = 10;
  @Input()
  jobs: Job[]
  

  constructor() { }

  ngOnInit() {
  }

}
