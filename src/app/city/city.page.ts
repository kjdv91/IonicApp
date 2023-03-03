import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  id:any;
  finalId: number = 0;
  cities: any = [];
  name: string | undefined;
  image!: string;
  description!: string;

  constructor(
    private http: HttpClient,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRouter.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    this.getCities().subscribe(res=>{
      console.log("Res", res)
      this.cities = res;
      this.name = this.cities[this.finalId].name;
    });
  }

  getCities(){
    return this.http.get
    ("assets/files/city.json").pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}
