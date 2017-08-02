import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from './category.model';

@Injectable()
export class CategoriesService {
    private readonly baseUrl: string = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    // Devuelve la lista de nombre y id de categorías
    getCategories(): Observable<Array<String>> {
        return this.http.get<Array<String>>(`${this.baseUrl}/categories`);
    }
    
    // Devuelve, haciendo un random, un palabra de una categoría.
    getWordFromCategory(category: Category): Observable<string> {
        return this.getWords(category)
            .map( words => {
                const i = Math.floor(Math.random() * words.length);

                return words[i].toUpperCase();
            })
    }

    private getWords(category: Category): Observable<Array<string>> {
        let cacheCategories = JSON.parse(localStorage.getItem('categories')) || [];

        if (cacheCategories.length) {
            // Busco si la categoría está en localStorage
            let cacheCat = cacheCategories.filter( cc => cc.name === category.name);

            if (cacheCat.length) {
                // Si está, retorno las palabras y salgo.
                return new Observable( obs => {
                    obs.next(cacheCat[0].words);
                    obs.complete();
                });
            }
        }

        // Si NO está en localStorage, hago el request.
        return this.http.get<Category>(`${this.baseUrl}/categories/${category._id}`)
            .map( cat => {
                // Guardo la categoría en localStorage
                cacheCategories.push(cat);
                localStorage.setItem('categories', JSON.stringify(cacheCategories));

                return cat.words;
            })
    }
}