import { Component, OnInit } from '@angular/core';
import { Path } from '../path.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  paths: Path[] = [
    new Path("Go Outside", 1),
    new Path("Stay Inside", 2),

    new Path("Go Left", 3),
    new Path("Go Right", 4),

    new Path("Go to Kitchen", 5),
    new Path("Go to Living Room", 6),

    new Path("Take Bus", 7),
    new Path("Ride Bike", 8),

    new Path("Go to Park", 9),
    new Path("Go to Ice Cream", 10),

    new Path("Clean Dishes", 11),
    new Path("Make Sandwich", 12),

    new Path("Watch a Movie", 13),
    new Path("Take a Nap", 14),

  ];



  constructor(private router: Router){}

  ngOnInit() {
  }
  goToDetailPage(clickedPath: Path) {
    this.router.navigate(['paths', clickedPath.id]);
  };

}
