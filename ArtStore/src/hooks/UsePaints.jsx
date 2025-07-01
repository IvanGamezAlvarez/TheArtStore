import React, { useEffect, useState } from "react";
import { getPaintsData } from "../firebase";

function UsePaints() {
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPaintsData();
      await setPaints(data);
    };

    getData();
  }, []);

  return { paints };
}

export default UsePaints;
