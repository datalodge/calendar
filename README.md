# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Title

API requests to tests calendar dates in the database. Testing GET, POST, DELETE, and PUT requests. Checking if I can delete, post, change, and get calendar dates in the database.


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


Method:

DELETE  

URL Params 

/api/bookings/:homeId


Success Response:

Code: 200 
Content: "Delete successful" 

Error Response:

Code: 400  
Content: "Delete not successful"

Method:

DELETE  

URL Params 

/api/bookings/:homeId


Success Response:

Code: 200 
Content: "Delete successful" 

Error Response:

Code: 400  
Content: "Delete not successful"

Method:

PUT  

URL Params 

/api/bookings/:homeId

Content: {
  booking_id : 2,
  home_id : 2,
  user_id : 2,
  check_in : 04182019,
  check_out : data,
  price_per_night : integer,
  no_guests : integer
}

Success Response:

Code: 200 
Content: "Change successful" 

Error Response:

Code: 400  
Content: "Change not successful"




Notes:


GET | POST | DELETE | PUT
