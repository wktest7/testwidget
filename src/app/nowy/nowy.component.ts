import { Component, OnInit } from '@angular/core';
declare let easyPack;

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.scss']
})



export class NowyComponent implements OnInit {
  mapa: any;
  constructor() { }

  ngOnInit(): void {
    easyPack.init({
      defaultLocale: 'pl',
      mapType: 'osm',
      searchType: 'osm',
      points: {
        types: ['parcel_locker']
      },
      map: {
        initialTypes: ['parcel_locker']
      }
    });
    this.mapa = easyPack.mapWidget('easypack-map', function (point) {
      alert(point.name);
    });
  }
}
