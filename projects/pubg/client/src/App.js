import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [username, setUseranme] = useState({
    username: "Hi Im Steve"
  });

  const options = {
    url: 'https://api.pubg.com/shards/steam/samples',
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZTk4ZTAxMC02NmY3LTAxMzgtNjY5MS0wMGIyODg2OTkzYzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3NTgxMTg2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im5pY2dlb3JnZTYtZ21hIn0.GyZQt6R7BVzNqKpY37HvZ-B63NockmI_VW1VEpOfAo0"
    }
  }

  
  axios(options).then(res=>console.log(res));

  return (
    <div>
      {username.username}
    </div>
  )
}

export default App;


//  PUBG APIKEY
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZTk4ZTAxMC02NmY3LTAxMzgtNjY5MS0wMGIyODg2OTkzYzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3NTgxMTg2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im5pY2dlb3JnZTYtZ21hIn0.GyZQt6R7BVzNqKpY37HvZ-B63NockmI_VW1VEpOfAo0





