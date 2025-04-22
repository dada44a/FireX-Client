/* eslint-disable @next/next/no-img-element */
import MovieInfo from "@/components/ui/MovieInfo";
import React from "react";

const page = async (/*{ params }: { params: Promise<{ slug: string }> }*/) => {
  // const { slug } = await params;
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-[500px] gap-2">
        <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg flex items-start justify-center">
          <img
            src={
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSBA3dGLs178d3WiW6M34_SNs5ueN5LLTowYrCnKutYyJh07QiGTs7BPoO6rdt5esVaYHH2zZVRErNCFMVPHjNxOSYOUw4gDbWtZySL8Zrrx9LmDQ3jFAk0Yu0YBU9240_WiV7LK55A1w/s1600/Make+Creative+Movie+Poster+With+Dark+and+Red+Tone+in+Photoshop+CC.jpg"
            }
            alt={"hello"}
            className="w-[300px] h-[500px] object-cover"
          />
        </div>
        <div className="lg:col-span-2 flex flex-col p-3 gap-4">
          <p className="text-3xl font-semibold">Inception</p>
          <div className="flex gap-2">
            <p className="badge badge-error">Sci-fi</p>
            <p className="badge badge-error">Action</p>
          </div>
          <div className="flex gap-4 ">
            <p className="text-gray-400">2h 45m</p>
            <p className="text-gray-400">Release: 7/16/2010</p>
            <p className="text-gray-400">Rating: PG-13</p>
          </div>
          <p>
            A thief who steals corporate secrets through the use of
            dream-sharing technology is given the inverse task of planting an
            idea into the mind of a C.E.O.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-warning rounded-xl">Book Tickets</button>
            <button className="btn btn-neutral rounded-xl">Share</button>
          </div>
        </div>
      </div>
     <MovieInfo/>
    </div>
  );
};

export default page;
