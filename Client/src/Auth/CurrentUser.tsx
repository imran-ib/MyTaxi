import React, { useState, useEffect } from "react";
import { Me } from "./AuthResolvers";
import { useQuery } from "@apollo/react-hooks";

function UserCurrentUser() {
  const [me, setMe] = useState();
  const { loading, error, data, refetch } = useQuery(Me);

  useEffect(() => {
    try {
      refetch();
      setMe(data);
    } catch (err) {
      console.log("error: ", err);
    }
  }, []);

  return me;
}

export default UserCurrentUser;
