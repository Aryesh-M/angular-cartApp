import { Component, OnInit } from "@angular/core";

export class Users {
    _id: string ='';
    name: string ='';
    email: string ='';
    password: string = '';
    address: string[] = [];
    isAdmin: boolean= false;
    cartItems: string[] = [];
}