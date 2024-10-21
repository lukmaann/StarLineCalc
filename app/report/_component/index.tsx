"use client";

import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import useNegativeFormStore from "@/store/negativeGridCostStore";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import useBatteryStore from "@/store/batteryStore";
import useCostStore from "@/store/finalStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";
import useNegativePastingFormStore from "@/store/negativePastingStore";
import useStore from "@/store/languageStore"; // Assuming this is your language store
import Link from 'next/link';
import Image from 'next/image';


const ReportPageComponent = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().slice(-2)}`;
   


    const { language } = useStore();
    const hindi = language === 'hindi';
    const positiveGrid = usePositiveFormStore();
    const negativeGrid = useNegativeFormStore();
    const positivePasting = usePositivePastingFormStore();
    const negativePasting = useNegativePastingFormStore();
    const battery = useBatteryStore();
    const cost = useCostStore();
    const reportRef = useRef(null);

    return (
        <div className="bg-black p-4 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-full md:max-w-4xl">
                <div ref={reportRef} className='p-5 '>
                    <div className='flex justify-between'>
                        <Image src={"/starlinelogo.webp"} width={100} height={100} alt="logo" />
                        <h1 className='text-foreground'><span className='font-bold'>Date:</span> {formattedDate}</h1>


                    </div>
                    <div className="p-3 border-b border-gray-00">
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            {hindi ? "अंतिम रिपोर्ट" : "Final Report"} {battery?.battery || (hindi ? 'अज्ञात बैटरी' : 'Unknown Battery')}
                        </h1>
                    </div>
              
                    <div className="p-4">
                        <p className="text-gray-600 mb-4 text-sm">
                            {hindi ? "यह अनुमानित राशि है जो बैटरी के निर्माण के लिए है:" : "This is the total estimated amount for manufacturing the"} {battery?.battery} .
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y border border-black divide-gray-300">
                                <thead className="bg-black text-white ">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">{hindi ? "क्रम संख्या" : "Serial Number"}</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">{hindi ? "आइटम" : "Item"}</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">{hindi ? "कुल कीमत" : "Total Price"}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    {[
                                        { item: hindi ? "पॉजिटिव प्लेट" : "Positive Plates", price: cost.positivePlatesTotal },
                                        { item: hindi ? "नेगेटिव प्लेट" : "Negative Plates", price: cost.negativePlatesTotal },
                                        { item: hindi ? "कॉन्टेनर" : "Container", price: cost.containerCost },
                                        { item: hindi ? "पैकिंग जाली" : "Packing Jali", price: cost.packingJaliTotal },
                                        { item: hindi ? "बैटरी पैकिंग" : "Battery Packing", price: cost.batteryPackingCost },
                                        { item: hindi ? "एसिड" : "Acid", price: cost.acidTotal },
                                        { item: hindi ? "बैटरी स्क्रीनिंग" : "Battery Screening", price: cost.batteryScreeningCost },
                                        { item: hindi ? "PVC सेपरेटर" : "PVC Separator", price: cost.pvcSepratorTotal },
                                        { item: hindi ? "प्लस माइनस कैप" : "Plus Minus Caps", price: cost.minusPlusCapsCost },
                                        { item: hindi ? "सीसा" : "Lead", price: cost.leadTotal },
                                        { item: hindi ? "चार्जिंग" : "Charging", price: cost.chargingCost },
                                        { item: hindi ? "श्रम" : "Labour", price: cost.labourCost },
                                    ].map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{row.item}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{row.price}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={2} className="px-4 py-2 border-t border-black text-sm font-bold text-gray-900 bg-gray-100">{hindi ? "कुल" : "Total"}</td>
                                        <td className="px-4 py-2 text-sm font-bold border-t border-black text-gray-900 bg-gray-100">₹{cost.finalBatteryPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <Link href={"/"}>
                        <button className="bg-gray-500 text-white px-4 text-sm py-2 rounded hover:bg-gray-700">{hindi ? "कल्कुलेटर पर वापस जाएं" : "Back to calculator"}</button>
                    </Link>
                    <ReactToPrint
                        trigger={() => <button className="bg-blue-500 text-white px-4 text-sm py-2 rounded hover:bg-blue-700">{hindi ? "पीडीएफ के रूप में डाउनलोड करें" : "Download as PDF"}</button>}
                        content={() => reportRef.current}
                        documentTitle={battery?.battery + " Report "}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReportPageComponent;
