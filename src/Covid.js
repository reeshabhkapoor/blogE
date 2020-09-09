import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import "./Covid.css";

function Covid() {
  const [covidDetails, updateDetails] = useState([]);

  useEffect(() => {
    async function GetResponse() {
      const response = await axios.get(
        `http://covid19-india-adhikansh.herokuapp.com/states`
      );

      const updatedDetails = response.data.state.filter(
        (state) => state.name !== "Cases being reassigned to states"
      );
      updateDetails(updatedDetails);
    }

    GetResponse();
  });

  return (
    <div className="covid__details">
      <Table details={covidDetails} />
    </div>
  );
}

export default Covid;
