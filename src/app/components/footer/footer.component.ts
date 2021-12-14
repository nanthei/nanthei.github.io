import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mapOptions: google.maps.MapOptions = {
    center: { lat: 55.075919, lng: 23.372840 },
    zoom : 14,
    // disableDefaultUI: true,
  }
  marker = {
    position: { lat: 55.075919, lng: 23.372840 },
  }
}
