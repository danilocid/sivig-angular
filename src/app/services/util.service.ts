import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  
  private readonly unauthorized = {
    status: 401,
    error: 'Unauthorized',
  };

  constructor(
    private router: Router,

  ) { }

  /**
   * Navega a una Ruta Especifica dentro del proyecto
   * @param path Ruta a la cual se desea Navegar
   */
  public navigateToPath(path: string): Promise<boolean> {
    if (path === '') {
      path = '/404';
    }
    return this.router.navigate([path]);
  }

  /**
  * Retorna una PROMESA con la respuesta de un objeto observable.
  * @param OBS Observable con la respuesta a obtener.
  */
  public returnObservableResponse(OBS: Observable<any>): Promise<any> {
    // tslint:disable-next-line: only-arrow-functions
    return new Promise((resolve, reject) => {
      if (OBS !== null && OBS !== undefined) {
        OBS.subscribe(
          (response: any) => {
            resolve(response);
          },
          (error: any) => {
            if ((error.error)) {
              reject(error);
            } else {
              reject(error);
            }
          }
        );
      } else {
        reject(null);
      }
    });
  }

 
}
