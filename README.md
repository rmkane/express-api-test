# Node REST Client

_A REST client for Node with MySQL and Express_

## Setup

* Create the database, see: `./app/resources/db-setup.sql`
* Run `npm install`

## Starting the server

Run `npm start`

## REST Example

Add a new task:

```js
// POST http://localhost:3000/v1/tasks
{
  "name": "Nothing again...",
  "status": 1
}
```

## Web Example

View all tasks:

```js
http://localhost:3000/tasks
```

View task with the `id` of `1`:

```js
http://localhost:3000/task/1
```
