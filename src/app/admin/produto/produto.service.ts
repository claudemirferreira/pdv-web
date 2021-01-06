import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PageableDTO } from 'src/app/shared/model/pageable-dto';
import { CrudService } from 'src/app/shared/service/crud.service';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}produto/`);
  }

  loadByID(id) {
    return null;
  }

  listarTodos() {
    return this.http.get(`${this.API_URL}`);
  }
  
  pesquisar(record: PageableDTO) {
    return this.http.post(this.API_URL+'pesquisar', record).pipe(take(1));
  }

}