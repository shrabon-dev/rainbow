
export default function Summery({title,percentage,amount}:{title?:string,percentage?:number,amount?:number}) {
  return (
    <>
      <div className="w-1/2 small-md:w-1/5 xl:w-1/5 p-10">
          <div className="summery group border-t-2 border-clr-brdr/20 relative pt-5">
            <span className="line  absolute top-0 left-0 block w-0 transition-all ease-linear group-hover:w-full duration-300 h-[2px] bg-g4"></span>
            {percentage?
            <div className="int text-base lg:text-2xl 2xl:text-5xl text-clr pb-5"><span className="text-4xl lg:text-6xl xl:text-[80px]">{percentage}</span>%</div>
            :
            <div className="int text-base lg:text-2xl 2xl:text-5xl text-clr pb-5"><span className="text-4xl lg:text-6xl xl:text-[80px]">{formatAmount(amount)}</span>+</div>
            }
            <h3 className="title text-clr-text text-xs 2xl:text-base font-normal">{title}</h3>
          </div>
      </div> 
    </>
  )
}

function formatAmount(amount?:number){
    if(!amount) return "";

    if(amount >= 1000){
        return (amount/1000).toFixed(amount%1000 === 0 ? 0 : 1) + "K";
    }

    return amount.toString();
}