import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - Rs {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className=" w-3/12 h-full p-4 border">
            <div className="absolute ">
              <button className=" p-2  mx-5 my-10 bg-zinc-400 text-white rounded-lg shadow-lg ">
                Add +
              </button>
            </div>

            <img
              className="w-full"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
