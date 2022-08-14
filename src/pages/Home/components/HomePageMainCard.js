import React from "react";

export default function HomePageMainCard() {
  return (
    <div>
      <div className="">
        <span className="mt-4">
          <img
            className="w-full"
    
            src="https://static.wixstatic.com/media/a38016_9bd9d7a9ccb44689ba0771fd8e44d08e.jpg/v1/fill/w_1206,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_9bd9d7a9ccb44689ba0771fd8e44d08e.jpg"
            alt="main"
          ></img>
        
        <div className=" pb-96" style={{marginTop: -502}}>
          <h1 className="text-white w-2/5 ml-24 -mt-12">
            <div className="text-6xl font-semibold ">FRESH</div>
            <div className="text-6xl font-semibold ">TALENT +</div>
            <div className="text-6xl font-semibold ">TOP </div>
            <div className="text-6xl font-semibold ">EMPLOYERS</div>
            <div className="text-2xl font-semibold">
              create your future with us
            </div>
          </h1>
          <div className="mx-20 mt-12">
          <button className="m-2 p-2 px-3 border-2  border-white text-white  hover:bg-yellow-600 ">
            FIND TALENT
          </button>
          <button className=" m-2 p-2 px-3 border-2 border-white text-white text-center hover:bg-yellow-600 ">
            FIND A JOB
          </button>
        </div>
        </div>
        </span>
        
      </div>
    </div>
  );
}
