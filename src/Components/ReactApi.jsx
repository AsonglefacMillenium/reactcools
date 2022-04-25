import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const ReactApi = () => {
    const { id } = useParams()
  const url = `https://6265d18263e0f38256794de9.mockapi.io/api/v1/users/`;
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, [url]);


  if(user){
    return (
        <div className="wrapper">
          {
              user.map(users =>{
                  return(
                    <div key={users.id}>
                  <h1 key={users.id}>{users.name}</h1>
                  <p>{users.createdAt}</p>
                  <img src={users.avatar[0].avatarUrl} alt={users.name} />

                  </div>
                  )
                 
              })
          }
        </div>
      );
  }

  return (
      <div></div>
  )
 
};

export default ReactApi;
