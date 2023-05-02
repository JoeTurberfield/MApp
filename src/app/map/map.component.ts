/// <reference types='leaflet-sidebar-v2' />
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { SidebarOptions } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  public map: any;
  public sidebarOptions: SidebarOptions = {
    position: 'right',
    autopan: true,
    closeButton: true,
    container: 'sidebar',
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    var popup = L.popup()
    .setLatLng(L.latLng(40,0))
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void { 
    this.initMap();
  }
}


