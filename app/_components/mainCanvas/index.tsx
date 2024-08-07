"use client"

import NavBar from "../../../components/navbar"
import NegativeGridCosting from "./components/negativeGridCost"
import NegativeGridSummary from "./components/negativeGridCost/negativeGridSummary"
import PositiveGridCost from "./components/positiveGridCost"
import PositiveGridSummary from "./components/positiveGridCost/positiveGridSummary"
import NegativePastCost from "./components/negativePastCost"
import PositivePastCost from "./components/positivePastCost"
import BatteryList from "./components/batteryList"
import TotalPricePerPlate from "@/components/totalPerPlate"
import OtherParts from "./components/finalCosting"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import useCostStore from "@/store/finalStore"

const MainCanvas = () => {
    const costStore=useCostStore();
    return <div className="bg-black w-full max-lg:px-0   shadow-md  px-10 text-white py-2 ">
        <div className=" border-b flex justify-between max-lg:flex-wrap max-lg:justify-center py-10">
            <PositiveGridCost />
            <NegativeGridCosting />
            {/* <PositiveGridSummary /> */}

        </div>
        <div className=" border-b flex  justify-center py-10">
            <PositivePastCost />

        </div>

        <div className=" border-b flex justify-center  py-10">
            <NegativePastCost />

        </div>
        <div className="m-2 gap-2 flex justify-center border-b py-5 ">
            <div className="m-4">
                <TotalPricePerPlate />
            </div>
            <div className="">
                <h1 className="m-2 font-bold">Select Battery</h1>
                <BatteryList />
            </div>
        </div>
        <div className=" border-b flex justify-center  py-10">
            <OtherParts />
        </div>
        {
            costStore.finalBatteryPrice!==0 ?
            <div className=" flex m-2 justify-end">
                <Link href={"/report"}><Button >Generate Report</Button></Link>
            </div>:<></>
        }






    </div>
}

export default MainCanvas