import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

@Injectable()
export class ChannelApi{

    private baseUrl = "";
    
    /**
     *
     */
    constructor(private http : Http) {
        
    }

    getChannels(){
        return new Promise(resolve => 
        {
            //http://localhost:58042/api/channels
            //http://movieosityapi.azurewebsites.net/api/channels
            this.http.get("http://movieosityapi.azurewebsites.net/api/channels")
            .subscribe(res => resolve(res.json()),
            error=>{
                console.log(error);// Error getting the data
                return "";
            });
        });
    }

    getChannelInfo(sigla){
        return new Promise(resolve => 
            {
                this.http.get("http://movieosityapi.azurewebsites.net/api/channels/" + sigla)
                .subscribe(res => resolve(res.json()));
            });

    }


}
