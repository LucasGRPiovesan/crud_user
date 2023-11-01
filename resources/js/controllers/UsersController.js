// import { Controller } from "./Controller";
import { UsersService } from "../services/UsersService";
// import { User } from "../models/User";

export class UsersController
{
    static createUser(data, callbacks) {

        this.onBeforeSend = callbacks.onListLoad;
        this.onSuccess = (res)=> {
            this._notify(res.message, "success");
            callbacks.updateList();
        };
        this.onError = (err) => {
            console.log(err);
            this._notify(err.responseJSON.message, "error");
        };
        this.onComplete = callbacks.onListComplete;

        UsersService.create(data, this);
    }

    static editUser(uuid, updates, callbacks) {

        this.onBeforeSend = callbacks.onListLoad;
        this.onSuccess = (res)=> {
            this._notify(res.message, "success");
            callbacks.updateList();
        };
        this.onError = (err) => {
            this._notify(err.responseJSON.message, "error");
        };
        this.onComplete = callbacks.onListComplete;

        UsersService.edit(uuid, updates, this);
    }

    static deleteUser(uuid, callbacks) {

        this.onBeforeSend = callbacks.onListLoad;
        this.onSuccess = (res)=> {
            this._notify(res.message, "success");
            callbacks.updateList();
        };
        this.onError = (err) => {
            this._notify(err.responseJSON.message, "error");
        };
        this.onComplete = callbacks.onListComplete;

        UsersService.delete(uuid, this);
    }

    static listUsers(callbacks) {

        this.onBeforeSend = callbacks.onListLoad;
        this.onSuccess = callbacks.onListSuccess;
        this.onError = (err) => {
            this._notify(err.message, "error");
        };
        this.onComplete = callbacks.onListComplete;

        UsersService.getAll(this);
    }

    static getUser(uuid, callbacks) {

        this.onBeforeSend = callbacks.onModalLoad;
        this.onSuccess = callbacks.onGetUserSuccess;
        this.onError = (err) => {
            this._notify(err.responseJSON.message, "error");
        };
        this.onComplete = callbacks.onModalComplete;

        UsersService.get(uuid, this);
    }

    static _notify(msg, status) {

        Swal.fire(msg, '', status);
    }
}
