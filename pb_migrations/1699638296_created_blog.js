/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hmnfvwb4wf7lcyt",
    "created": "2023-11-10 17:44:56.369Z",
    "updated": "2023-11-10 17:44:56.369Z",
    "name": "blog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zcd0fgki",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6kmqjr5g",
        "name": "snippet",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lrtakb1a",
        "name": "body",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hmnfvwb4wf7lcyt");

  return dao.deleteCollection(collection);
})
