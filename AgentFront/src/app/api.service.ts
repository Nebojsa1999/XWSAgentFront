import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "https://localhost:44339";

  constructor(private http: HttpClient) { }

  getAuthHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }

  register(data: any) {
    return this.http.post(this.baseURL + "/api/user/register", data);
  }

  login(data: any) : any {
    return this.http.post(this.baseURL + "/api/auth/login", data);
  }

  getCurrentUser() : any {
    return this.http.get(this.baseURL + "/api/auth/current", this.getAuthHeader());
  }

  createBusiness(data:any) : any {
      return this.http.post(this.baseURL + "/api/business/create",data, this.getAuthHeader());
  }

  getUnactivated() : any {
    return this.http.get(this.baseURL + "/api/business/getUnactivated", this.getAuthHeader());
}

activateBusiness(data:any) : any {
    return this.http.put(this.baseURL + "/api/business/activateBusiness/" + data.businessId,data,this.getAuthHeader());
}

updateCompany(data:any) : any {
    return this.http.put(this.baseURL + "/api/business/updateCompany",data,this.getAuthHeader());
}

addJob(data:any) : any {
    return this.http.post(this.baseURL + "/api/job/addJob",data, this.getAuthHeader());
}
addReaction(data:any) : any {
    return this.http.post(this.baseURL + "/api/reaction/addReaction",data, this.getAuthHeader());
}
getBusinessByUser() : any{
    return this.http.get(this.baseURL+ "/api/business/getBusinessByUser",this.getAuthHeader());
}

saveApiKey(data:any) : any{
    return this.http.post(this.baseURL+ "/api/apiKey/saveApiKey",data,this.getAuthHeader());
}

getAllJobs(): any
{
  return this.http.get(this.baseURL + "/api/job/getAllJobs",this.getAuthHeader());
}

getReactionsByJobId(data:any): any
{
  return this.http.get(this.baseURL + "/api/reaction/getReactionsByJobId/" + data.jobId ,data);
}

get(data:any):any{
  return this.http.get(this.baseURL +"/api/job/getJob/" + data.id,data);
}


}