import ImageFrame from "./ImageFrame";

function ImagesDiplayer({ Paints }) {
  return (
    <>
      {console.log(Paints)}
      <div className=" grid grid-cols-4 bg-amber-50 gap-2 py-2 ">
        {Paints.map((item) => (
          <ImageFrame key={item.id} item={item} id={item.id} />
        ))}
      </div>
    </>
  );
}

export default ImagesDiplayer;
