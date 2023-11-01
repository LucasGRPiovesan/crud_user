import { Service } from "./Service";

export class UsersService extends Service {

    static create(user, resource) {   
        this._request("POST", 'users', user, resource);
    }

    static edit(uuid, updates, resource) {   
        this._request("PATCH", `user/${uuid}`, updates, resource);
    }

    static delete(uuid, resource) {   
        this._request("DELETE", `user/${uuid}`, {}, resource);
    }

    static getAll(resource) {
        this._request("GET", 'users', {}, resource);
    }

    static get(uuid, resource) {
        this._request("GET", `user/${uuid}`, {}, resource);
    }
}