import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';
import { Observable, interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
  private updateSubscription: Subscription;

  private client: Client;
  private queryalldocs = {
    'query': {
      'match_all': {}
    }
  };

  private queryPostive= {
    'query': {
      'term': {
        'positive': 'true' 
      }
    }
  };



  private queryNegative= {
    'query': {
      'term': {
        'negative': 'true' 
      }
    }
  };


  private queryNeutre= {
    'query': {
      'term': {
        'neutre': 'true' 
      }
    }
  };


  private QueryLangueFrançais= 
    {
      'query': {
        'term': {
          'lang': 'fr' 
        }
      }
    }

    private QueryLangueAnglais= 
    {
      'query': {
        'term': {
          'lang': 'en' 
        }
      }
    }


    private QueryLangueDeutsh= 
    {
      'query': {
        'term': {
          'lang': 'de' 
        }
      }
    }

    private QueryLanguePortugual= 
    {
      'query': {
        'term': {
          'lang': 'pt' 
        }
      }
    }
    private QueryLangueCorean= 
    {
      'query': {
        'term': {
          'lang': 'ko' 
        }
      }
    }
  constructor(private http: HttpClient, private toastr: ToastrService) {
    if (!this.client) {
      this._connect();
    }
  }


  url = 'http://localhost:3000';

  getparametre(id :Number) {
  
    return this
      .http
      .get(`${this.url}/search/${id}`);
      }

      getparametrelist(id :Number) {
  
        return this
          .http
          .get(`${this.url}/details/${id}`);
          }

Deletestream(id:Number){
  return this.http.delete(`${this.url}/search/${id}`);

}

Deleteindex(index){
 return this.client.indices.delete({
    index: index
}, function(err, res) {

    if (err) {
        console.error(err.message);
    } else {
        console.log('Indexes have been deleted!');
    }
});

}
      
  getInstagrammeData(data) {

    
    this.http.post(`${this.url}/societe`,data)
    .subscribe(
      res => {
       
        this.toastr.success('Votre societe a été créer avec succès.', 'Success');
      },
      err => {
        this.toastr.error(err.message, 'Error occured');
      }
    );
  }
  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }
 
  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }
 
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello grokonez!'
    });
  }


 

  ElasticsearchSearch(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.queryalldocs,
   
  
    });
  }



  ElasticsearchSearchPostive(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.queryPostive,
   
  
    });
  }


  ElasticsearchSearchNegative(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.queryNegative,
   
  
    });
  }



  ElasticsearchSearchNeutre(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.queryNeutre,
   
  
    });
  }

  ElasticsearchSearchFrançais(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.QueryLangueFrançais,
   
  
    });
  }
  ElasticsearchSearchAnglais(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.QueryLangueAnglais,
   
  
    });
  }


  ElasticsearchSearchDeutsh(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.QueryLangueDeutsh,
   
  
    });
  }
  ElasticsearchSearchPortugual(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.QueryLanguePortugual,
   
  
    });
  }
  ElasticsearchSearchCorean(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:0,
   
      body: this.QueryLangueCorean,
   
  
    });
  }
  ElasticsearchSearchAll(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
       size:10000,
   
      body: this.queryalldocs,
   
  
    });
  }



}