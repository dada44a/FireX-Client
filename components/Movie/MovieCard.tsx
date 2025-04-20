/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/Interfaces";


export default function MovieCard(props: Movie) {

  // Looping through the genre array and slicing it to 2
  const genres = props.genre?.slice(0,2).map((genre, index) => (
    <span key={index} className="badge badge-neutral text-[12px]">
      {genre}
    </span>
  ))


  return (
    <div className="card shadow-sm hover:border hover:border-white hover:p-1">
      <figure>
        <img
          src={props.poster ?? "/placeholder.jpg"}
          alt={props.title || "Not Availabr"}
          className="w-[238px] h-[353px] image-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="flex justify-evenly text-[13px] text-gray-400">
        <p>{props.duration}</p>
        <p>{props.releaseDate}</p>
        </div>
        <div className="flex gap-2">
        {genres}
        </div>
        <div className="card-actions ">
          <button className="btn btn-warning w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
}
