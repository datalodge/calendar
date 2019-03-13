# Project Name

> The focus of this application was to create the back-end for the calendar component for a lodging company that specializes in arranging or offering lodging for tourists. The application was refactored to withstand production level traffic and was originally created with the intention of handling at least 2000 requests per second with a latency under 100 ms. 

## Related Projects

  - https://github.com/datalodge/amenities
  - https://github.com/datalodge/photos
  - https://github.com/datalodge/reviews

## Table of Contents

1. [Requirements](#requirements)
1. [Getting Started](#gettingStarted)


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 7.6.0
- Java 1.8
- Apache Cassandra 3.11 

## Getting Started
- npm install
- instantiate cassandra
- npm run seedcsv 
- Copy csv seed into Cassandra 
- npm run dev:react to build the component 
- npm run dev:server to start the server 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Title

API requests to tests calendar dates in the database. Testing GET and POST requests. Checking if I can post and get calendar dates in the database.


URL

http://localhost:3002

Method:

POST 

URL Params 

/api/bookings/

Required:

booking_id = [integer]
home_id = [integer]
user_id = [integer]
check_in = [date]
check_out = [date]
price_per_night = [integer]
no_guests = [integer]

Data Params

{
  booking_id : integer,
  home_id : integer,
  user_id : integer,
  check_in : date,
  check_out : data,
  price_per_night : integer,
  no_guests : integer
}


Success Response:

Code: 200 
Content: {
  booking_id : 2,
  home_id : 2,
  user_id : 2,
  check_in : 04182019,
  check_out : data,
  price_per_night : integer,
  no_guests : integer
}
Error Response:

Code: 400 UNAUTHORIZED 
Content: { error : "Log in" }


Method:

GET  

URL Params 

/api/bookings/:homeId


Success Response:

Code: 200 
[
  [
    [
      {
          "val": null,
          "status": null
      },
      {
          "val": "2018-11-15T08:00:00.000Z",
          "status": null
      },
      {
          "val": null,
          "status": null
      }
    ]
  ]
]


Error Response:

Code: 400  



GET | POST 
