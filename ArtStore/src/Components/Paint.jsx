import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPaintsData } from "../firebase";
import ItemCount from "./Funtionalities/ItemCount";

function Paint() {
  const { id } = useParams();
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPaintsData();
      await setPaints(data);
    };

    getData();
  }, []);

  const paintToShow = paints.find((paint) => paint.id === Number(id));

  return (
    <>
      {paintToShow ? (
        <div className=" flex justify-center gap-5   h-150 m-10">
          <div className="h-full w-1/2  ">
            <img
              src={paintToShow.imageUrl}
              alt={paintToShow.title}
              className=" p-1  object-contain   h-full m-auto   "
            />
          </div>

          <div className=" px-10 text-amber-50 mt-10  w-1/2">
            <Link
              to={`/Catalog/${paintToShow.artStyle}`}
              className=" mt-10 text-2xl underline"
            >
              {paintToShow.artStyle}
            </Link>
            <h2 className=" text-3xl font-bold my-2 p-0">
              {paintToShow.title}
            </h2>
            <p className=" w-100">{paintToShow.description}</p>
            <h3 className=" font-bold mt-60"> Price:</h3>
            <h2> {paintToShow.value}.00$</h2>

            <h3 className=" font-bold"> Author:</h3>
            <p>{paintToShow.author}</p>

            <ItemCount key={paintToShow.id} itemId={paintToShow.id} />
          </div>
        </div>
      ) : (
        <div>
          <h2 className=" text-center text-3xl m-6 text-amber-50 font-semibold ">
            Loading...
          </h2>
          <p className=" text-center text-amber-50 text-xl ">
            If the loading does not finish, it is possible that the URL does not
            exist yet.
          </p>
        </div>
      )}
    </>
  );
}

export default Paint;
