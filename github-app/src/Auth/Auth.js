import React, { Component } from 'react';
import auth0 from 'auth0-js';


export default class Auth {
  // login method that calls the authorize method from auth0.js.
  auth0 = new auth0.WebAuth({
    domain: 'wamae.auth0.com',
    clientID: 'hLDjcWf5b1KUS0hNqOT0hH79J7gCtCCS',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://wamae.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
