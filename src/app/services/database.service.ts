import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  // URL del endpoint del servicio de django de modelo de espacios
  private endpoint = 'http://127.0.0.1:8000/SUJ-D-019/spaces/';
  private campus: Observable<any[]>;

  constructor(private http: HttpClient) {
  }


  // Region has to be handled differently, because it has no parent_id
  public postRegion(region: any){

    const params = new HttpParams();
    const body = region;

    return this.http.post<any>(this.endpoint, body,  {params} );
  }

  public getCampus2(){
    console.log('inside getCampus');
    // return new Observable<any>();
    const params = new HttpParams();
    const answer = this.http.get<any>(this.endpoint, {params} ).toPromise();
    return answer;
  }

  public postSpace(space: any, parent: string){
    const params = new HttpParams();
    const body = space;
    body.parent_id = parent;

    return this.http.post<any>(this.endpoint, body,  {params} ).toPromise();
  }

  public putSpace(space: any, parent: string){
    const params = new HttpParams();
    const body = space;
    body.parent_id = parent;

    return this.http.put<any>(this.endpoint, body,  {params} ).toPromise();
  }


  public async deleteSpace(id: string){
    const params = new HttpParams();
    const path = this.endpoint + id;

    console.log(path);
    const ans = await this.http.delete<any>(path, {params} ).toPromise();
    console.log(ans);
    return ans;
  }
}


