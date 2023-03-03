import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    public toastController: ToastController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.getCities().subscribe(res=>{
      console.log("Res", res)
      this.cities = res;
    });
  }

  goHome(){
    this.router.navigate(['/home'])


  }

  getCities(){
    return this.http.get
    ("assets/files/city.json").pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }
//toast
  async pressToast(){
    const toast = await this.toastController.create({
      message: "Ciudad seleccionada",
      duration: 2000,
      position: "bottom"

    });
    toast.present();
  }

  async pressAlert(){
    const alert = await this.alertController.create({
      header:"Eliminar Ciudad",
      message: "Se ha borrado la ciudad correctamente",
      buttons: ["Ok"]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }



  async pressAlert2(){
    const alert = await this.alertController.create({
      header:"Eliminar Ciudad",
      message: "Estas Seguro",
      buttons: [
        {
          text: "No",
          handler: ()=>{
            console.log("No cancel")
          }
        },
        {
          text: "Sí",
          handler: ()=>{
            console.log("Ciudad Eliminada")
          }

        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}


