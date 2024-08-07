"use client";
import useFormStore from "@/store/positiveGridCostStore";
import { useEffect } from "react";
import useStore from "@/store/languageStore";

const PositiveGridSummary = () => {
    const { language } = useStore();
    const hindi = language === 'hindi';
    const { totalPrice, totalRawMaterial, totalGrids, costPerPiece } = useFormStore();

    return (
        <div className="text-sm w-[300px] flex flex-col justify-end p-2 text-white bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-600 border border-gray-500 shadow-lg">
            {/* <h2 className="text-lg underline font-bold mb-2 text-gray-200">Total</h2> */}
            <div className="px-2 mb-1">
                <p>{hindi ? "प्राइस:" : "Price:"} <strong>₹{totalPrice.toFixed(2)}</strong></p>
                <p>{hindi ? "रॉ मैटेरियल:" : "Raw Material:"} <strong>{totalRawMaterial.toFixed(2)}</strong> kg</p>
                <p><strong>{totalGrids}</strong> {hindi ? "ग्रिड्स बन सकते हैं" : "Grids can be made"}</p>
                <p className="bg-yellow-400 text-black px-2 rounded-sm">{hindi ? "पर पीस:" : "Per Piece:"} <strong>₹{costPerPiece.toFixed(2)}</strong></p>
            </div>
        </div>
    );
}

export default PositiveGridSummary;
