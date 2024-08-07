"use client";

import { Input } from "@/components/ui/input";
import useFormStore from "@/store/negativePastingStore";
import { useFormik } from "formik";
import { useEffect } from "react";
import useStore from "@/store/languageStore";

const PositivePastingSummary = () => {
    const { language } = useStore();
    const hindi = language === 'hindi';
    const { totalAmount, totalPlates, costPerPlate, setCostPerPlates } = useFormStore();

    const formik = useFormik({
        initialValues: {
            labourCharge: 2,
        },
        onSubmit: (values) => {
            const total = costPerPlate + (values.labourCharge || 0);
            setCostPerPlates(total);
        }
    });

    return (
        <div className="text-sm w-[300px] flex flex-col justify-end p-2 text-white bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-600 border border-gray-500 shadow-lg">
            <div className="px-2 mb-1">
                <p>{hindi ? "कुल राशि:" : "Total Amount:"} <strong>₹{totalAmount.toFixed(2)}</strong></p>
                <p>{hindi ? "कुल प्लेटें:" : "Total Plates:"} <strong>{totalPlates}</strong></p>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2 items-center flex justify-between">
                        <h1>{hindi ? "मजदूरी:" : "Labour:"}</h1>
                        <div>
                            <input 
                                id="labourCharge"
                                name="labourCharge"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.labourCharge}
                                className="text-black h-5 w-[60px] px-2 rounded-r-none focus:outline-none"
                            />
                        <button type="submit" className="bg-black px-3 text-xs rounded-l-none text-white min-h-5 rounded">{hindi ? "जोड़ें" : "Add"}</button>
                        </div>
                    </div>
                </form>
                <p className="bg-yellow-400 text-black px-2 rounded-sm mt-2">{hindi ? "प्रति प्लेट लागत:" : "Cost Per Plate:"} <strong>₹{costPerPlate}</strong></p>
            </div>
        </div>
    );
}

export default PositivePastingSummary;
