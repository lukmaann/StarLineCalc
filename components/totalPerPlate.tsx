"use client"

import useNegativeFormStore from "@/store/negativeGridCostStore";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import useNegativePastingFormStore from "@/store/negativePastingStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";

const TotalPricePerPlate = () => {
    const positiveGrid = usePositiveFormStore();
    const negativeGrid = useNegativeFormStore();
    const positivePasting = usePositivePastingFormStore();
    const negativePasting = useNegativePastingFormStore();


    const totalPositive = Math.ceil(positiveGrid.costPerPiece / 2) + (positivePasting.costPerPlate);
    const totalNegative = Math.ceil(negativeGrid.costPerPiece / 2) + (negativePasting.costPerPlate);


    return <div className="p-2 border h-max w-max ">
        <h1 className="w-max  p-1 bg-white text-black">Prices per plate after pasting</h1>
        <div className="p-1">
            <h1> Positive : <strong>{totalPositive}</strong></h1>
            <h1> Negative : <strong>{totalNegative}</strong></h1>
        </div>



    </div>
}

export default TotalPricePerPlate;