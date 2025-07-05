import Summery from "../utils/Summery";

export default function CompanySummery() {
  return (
    <>
      <div className="CompanySummery">
        <div className="container mx-auto py-20">
        <div className="flex flex-wrap justify-center ">
         <Summery title="Business Strategy" percentage={99}/>
         <Summery title="Targeted Acquisition" percentage={82}/>
         <Summery title="Complete Projects" amount={62000}/>
         <Summery title="Happy Customers" amount={15000}/>
         <Summery title="Consultant Advisors" amount={100}/>
        </div>
        </div>
      </div>
    </>
  )
}
