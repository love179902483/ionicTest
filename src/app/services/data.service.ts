import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {

  private data = [];

  constructor(private dataService: DataService) { }

  setData(id, data){
    this.data[id] = data;
  }

  getData(id){
    return this.data[id]
  }
 
  resolve(route: ActivatedRouteSnapshot){
    let id = route.paramMap.get('id');
    return this.getData(id)
  }
  
}
