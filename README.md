# Quiz App API

API for quiz application

## Environment

Node 10.17.0
ExpressJS 4.0.0

## Database

Not yet implemented. It has relationships as follow:

Activity (1 - *) Round
Round (1 - *) Question
Activity (1 - *) Question

If the relations stands, a SQL based DB (e.g. postgres) should be a better choice over a document based (e.g. mongodb)

By default, the application is configured to start on port 3009.


## Installation

```bash
yarn
```

## Starting the Application

```bash
yarn start
```

## Testing the Application

```bash
yarn test
```

## Endpoints

```bash
GET /api/

Fetch all activities
```

```bash
GET /api/:id/questions

Fetch all questions of an activity, supports pagination
```

```bash
GET /api/:id/questions/count

Fetch count of all questions of an activity
```

```bash
GET /api/:id/rounds

Fetch all rounds of an activity
```

```bash
GET /api/:id/rounds/:roundId/questions

Fetch all questions of a round of an activity (@TODO: support pagination)
```

```bash
PUT /api/:id/questions/:id

Update a question of an activity (Not yet implemented)
```

```bash
PATCH /api/:id/questions/:id

Update part of question of an activity (Not yet implemented)
```

## Cross Origin Resource Sharing - CORS
Currently this API accepts all the connections. It should be locked down to only allow specific connections


