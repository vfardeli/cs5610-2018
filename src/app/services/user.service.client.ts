import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { SharedService } from './shared.service';
import { User } from '../models/user.model.client';

// injecting Http service into UserService
@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private sharedService: SharedService,
        private router: Router
    ) { }

    baseUrl = environment.baseUrl;

    options = new RequestOptions();

    // users: User[] = [
    //     { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    //     { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    //     { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    //     { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    // ];

    // api = {
    //     'createUser': this.createUser,
    //     'findUserById': this.findUserById,
    //     'findUserByUsername': this.findUserByUsername,
    //     'findUserByCredentials': this.findUserByCredentials,
    //     'updateUser': this.updateUser,
    //     'deleteUser': this.deleteUser
    // };

    loggedIn() {
        this.options.withCredentials = true;

        const url = this.baseUrl + '/api/loggedIn';
        return this.http.post(url, '', this.options).map(
            (res: Response) => {
                const user = res.json();
                if (user !== '0') {
                    this.sharedService.user = user; // setting user so as to share with all components
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );
    }

    login(username: String, password: String) {
        this.options.withCredentials = true;

        const body = {
            username: username,
            password: password
        };

        const url = this.baseUrl + '/api/login';
        return this.http.post(url, body, this.options).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    logout() {
        this.options.withCredentials = true;

        const url = this.baseUrl + '/api/logout';
        return this.http.post(url, '', this.options).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    register(username: String, password: String) {
        this.options.withCredentials = true;
        const user = {
            username: username,
            password: password
        };

        const url = this.baseUrl + '/api/register';
        return this.http.post(url, user, this.options).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    createUser(user: User) {
        const url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findUserById(userId: String) {
        const url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        );
    }

    findUserByUsername(username: String) {
        const url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    findUserByCredentials(username: String, password: String) {
        const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    updateUser(userId: String, user: User) {
        const url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map((response: Response) => {
            return response.json();
        });
    }

    deleteUser(userId: String) {
        const url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }
}
