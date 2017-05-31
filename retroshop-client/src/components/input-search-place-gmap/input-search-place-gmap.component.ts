import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {MapsAPILoader} from "angular2-google-maps/core";
import {} from 'googlemaps';

@Component({
  selector: 'app-input-search-place-gmap',
  templateUrl: './input-search-place-gmap.component.html',
  styleUrls: ['./input-search-place-gmap.component.css']
})
export class InputSearchPlaceGmapComponent implements OnInit {

  @ViewChild('searchPlace')
  inputSearchPlaceRef: ElementRef;

  @Output() onPlaceChanged = new EventEmitter<any>();

  zoom = 15;
  location = {
    lat: 40.4153838,
    lng: -3.703219900000022
  };
  iconUrl = 'assets/images/markerIcon2.png';

  constructor(private mapsApiLoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsApiLoader.load().then(() => {

      let options = {
        types: ['address'],
      };

      let autocomplete = new google.maps.places.Autocomplete(this.inputSearchPlaceRef.nativeElement, options);

      // Add listener to the place changed event
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();
          let lat = place.geometry.location.lat();
          let lng = place.geometry.location.lng();
          this.location = { lat, lng };
          this.onPlaceChanged.emit(this.location);
        });
      });
    });
  }

}
