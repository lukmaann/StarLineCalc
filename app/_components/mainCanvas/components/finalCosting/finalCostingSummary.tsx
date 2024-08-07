"use client";

import { Input } from "@/components/ui/input";

import { useFormik } from "formik";
import { useEffect } from "react";
import useStore from "@/store/languageStore";
import useCostStore from "@/store/finalStore";

const PositivePastingSummary = () => {
    const {finalBatteryPrice}=useCostStore();
    const { language } = useStore();
    const hindi = language === 'hindi';



    return (
        <div className="text-sm w-[300px] flex flex-col justify-end p-2 text-white bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-600 border border-gray-500 shadow-lg">
            <div className="px-2 mb-1">
                <p>{hindi ? "कुल राशि:" : "Final estimated Price"}</p>
              
                <p className="bg-yellow-400 text-black px-2 rounded-sm mt-2"> <strong>₹{finalBatteryPrice}</strong></p>
            </div>
        </div>
    );
}

export default PositivePastingSummary;
