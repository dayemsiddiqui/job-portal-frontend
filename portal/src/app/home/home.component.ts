import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { JobResponse, Job } from '../shared/shared.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs :Job[];
  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.fetchTopJobs()
  }

  fetchTopJobs() {
    this.jobService.getJobs(1, 10)
    .subscribe((data :JobResponse) => {
      this.jobs = data.result;
    })
  }



}
