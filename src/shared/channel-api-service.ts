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
            this.http.post(this.baseUrl, "")
            .subscribe(res => resolve(res.json()));
        });
    }


}
