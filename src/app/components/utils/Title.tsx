import { ReactNode } from "react";

export default function Title({title,icon}:{title?:string,icon?:ReactNode,}) {
  return (
    <div>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r to-g3 from-g4 px-5 py-2 rounded-full inner-shadow">
            <span className="icon text-xl text-white rotate-120 capitalize">{icon}</span>
            <h6 className="title text-sm text-white font-medium ">
                {title}
            </h6>
        </div>
    </div>
  )
}
