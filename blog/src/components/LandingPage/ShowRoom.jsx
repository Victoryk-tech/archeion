import React from "react";

const ShowRoom = () => {
  return (
    <div>
     

      <div className="flex flex-col md:flex-row items-center justify-center w-full py-8 lg:px-16 space-y-4 lg:space-x-2">
        <div className="lg:w-full lg:h-[35rem]">
          <img
            src="https://images.unsplash.com/photo-1723549645135-ae1127f5cd92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-contain"
          />
          <h4 className="text-sm font-medium text-center">
            A large metal object sitting on top of a wooden table
          </h4>
        </div>
        <div className="grid lg:grid-cols-2 items-center justify-center lg:w-[80%] gap-y-8 md:gap-4">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661297433665-870517c1cf6f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-contain"
            />
            <h4 className="text-sm font-medium">
              Antique typewriter and vintage office tools on wooden table.
              Nostalgic still life
            </h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-contain"
            />
            <h4 className="text-sm font-medium">
              a dimly lit hallway with a display case
            </h4>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1560846310-697b9abf2b67?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-contain"
            />
            <h4 className="text-sm font-medium">vintage cameras</h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1632749695674-652567ba3338?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-contain"
            />
            <h4 className="text-sm font-medium">
              a black and white photo of a statue of a man on a horse
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRoom;
