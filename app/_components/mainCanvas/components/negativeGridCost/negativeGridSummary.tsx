"use client";
import useFormStore from "@/store/negativeGridCostStore";
import { useEffect } from "react";
import useStore from "@/store/languageStore";

const PositiveGridSummary = () => {
    const {language} = useStore();
    const hindi = language === 'hindi';
    const { totalPrice, totalRawMaterial, totalGrids, costPerPiece } = useFormStore();

    return (
        <div className="text-sm w-[300px] flex flex-col justify-end p-2 text-white bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-600 border border-gray-500 shadow-lg">
            <div className="px-2 mb-1 ">
                {hindi ? (
                    <>
                        <p> प्राइस: <strong>₹{totalPrice.toFixed(2)}</strong></p>
                        <p> रॉ मटेरियल: <strong>{totalRawMaterial.toFixed(2)}</strong> kg</p>
                        <p>  <strong>{totalGrids}</strong> ग्रिड्स बन सकते हैं</p>
                        <p className="bg-yellow-400 text-black px-2 rounded-sm">पर पीस: <strong>₹{costPerPiece.toFixed(2)}</strong> </p>
                    </>
                ) : (
                    <>
                        <p> Price: <strong>₹{totalPrice.toFixed(2)}</strong></p>
                        <p> Raw Material: <strong>{totalRawMaterial.toFixed(2)}</strong> kg</p>
                        <p>  <strong>{totalGrids}</strong> Grids can be made</p>
                        <p className="bg-yellow-400 text-black px-2 rounded-sm">Per Piece: <strong>₹{costPerPiece.toFixed(2)}</strong> </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default PositiveGridSummary;
