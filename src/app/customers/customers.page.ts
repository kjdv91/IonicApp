import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  users : any = [];
  permisions! : boolean;
  searchCust : any;
  constructor(
    private router: Router,
    private http: HttpClient

    ) {

    }

  ngOnInit() {
    this.permisions = true;
    this.getUsers().subscribe(res=>{
      console.log("Res", res)
      this.users = res;
      this.searchCust = this.users;

    });


  }

  goHome(){
    this.router.navigate(['/home'])


  }

  getUsers(){
    return this.http.get
    ("assets/files/customers.json").pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  searchCustomer(event:any){
    const text = event.target.value;

    if(text && text.trim() != ''){
      this.searchCust = this.searchCust.filter((user: any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);

      })

    }


  }

}
