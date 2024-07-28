/
-src/
    index.js // server
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/
    repository/
    services/
-tests/ [later]
-static/

## Tables

### City => id, name,created_at,updated_at
### Airport => id,name,address, city_id, created_at, updated_at
      Realationship -> City has many airports and Airport belongs to a city (one to many)

```
npx sequelize model:generate --name Airport --attributes
name:String,address:String,cityId:integer
```

