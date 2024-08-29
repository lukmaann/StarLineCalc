"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from "../../../components/navbar";
import NegativeGridCosting from "./components/negativeGridCost";
import PositiveGridCost from "./components/positiveGridCost";
import NegativePastCost from "./components/negativePastCost";
import PositivePastCost from "./components/positivePastCost";
import BatteryList from "./components/batteryList";
import TotalPricePerPlate from "@/components/totalPerPlate";
import OtherParts from "./components/finalCosting";
import { Button } from "@/components/ui/button";
import useCostStore from "@/store/finalStore";

const MainCanvas = () => {
    const [loading, setLoading] = useState(false);
    const costStore = useCostStore();
    const router = useRouter();

    const handleGenerateReport = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push('/report');
        }, 1500); // 1 second delay
    };

    return (
        <div className="bg-black w-full max-lg:px-0 shadow-md px-10 text-white py-2">
            {loading?<div className='h-[80vh] flex justify-center items-center w-[90vw] '><h1 className='animate-pulse'>Loading...</h1></div>:<div>
            <div className="border-b flex justify-between max-lg:flex-wrap max-lg:justify-center py-10">
                <PositiveGridCost />
                <NegativeGridCosting />
            </div>
            <div className="border-b flex justify-center py-10">
                <PositivePastCost />
            </div>
            <div className="border-b flex justify-center py-10">
                <NegativePastCost />
            </div>
            <div className="m-2 gap-2 flex justify-center border-b py-5">
                <div className="m-4">
                    <TotalPricePerPlate />
                </div>
                <div>
                    <h1 className="m-2 font-bold">Select Battery</h1>
                    <BatteryList />
                </div>
            </div>
            <div className="border-b flex justify-center py-10">
                <OtherParts />
            </div>
            {costStore.finalBatteryPrice !== 0 && (
                <div className="flex m-2 justify-end">


                    <Button onClick={handleGenerateReport}>Generate Report</Button>

                </div>
            )}
            </div>}

        </div>
    );
};

export default MainCanvas;
