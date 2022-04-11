import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  title = ""
  job_description = ""
  company = ""
  email = ""
  constructor() { 
  }

  ngOnInit(): void {
  }

}
