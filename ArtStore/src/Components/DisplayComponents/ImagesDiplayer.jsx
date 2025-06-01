import ImageFrame from "./ImageFrame";

function ImagesDiplayer({ Paints }) {
  return (
    <>
      <div className=" grid grid-cols-4 ">
        {Paints.map((item) => (
          <ImageFrame key={item.id} item={item} id={item.id} />
        ))}
      </div>
    </>
  );
}

export default ImagesDiplayer;
