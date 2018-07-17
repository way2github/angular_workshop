import { Injectable } from "@angular/core";
import { Posts } from "./posts.model";
import { Http } from "@angular/http";

@Injectable()
export class PostService {
    url: string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http: Http) { }
    getPosts(): Promise<Posts> {
        return this.http.get(this.url).toPromise().then(response => response.json())
    }
}