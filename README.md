# Foodi Restaurant MERN Project

![Foodi Restaurant Cover Image](/cover-image.png)

## Table of Contents
- [Overview](#overview)
- [Install](#install)


## Overview

**Foodi Restaurant** is a complete MERN stack project designed to manage a restaurant application efficiently. It integrates features like user authentication, payment handling via Stripe, and image hosting via IMGBB API. 


## Install

Ensure you have [Node.js](http://nodejs.org) and [npm](https://npmjs.com) installed.

### Steps:

1. Clone or download the project folder and unzip it.
2. Navigate to the root directory of both the **Frontend (foodi-client)** and **Backend (foodi-server)** folders.


### Frontend Setup
- follow the command to run the client site: 

```sh
$ npm install
```
```sh
$ npm run dev
```
```sh
$ add a .env.local file and include the following environment variables
```

```
VITE_APIKEY= from firebase
VITE_AUTHDOMAIN= from firebase
VITE_PROJECTID= from firebase
VITE_STORAGEBUCKET= from firebase
VITE_MESSAGINGSENDERID= from firebase
VITE_APPID= from firebase
```

### Backend Setup
- follow the command to run the server site: 
```sh
$ npm install
```
```sh
$ npm start
```
```sh
$ add a .env file and include the following environment variables
```

```
DB_USER = mongodb_username
DB_PASS = mongodb_password
```