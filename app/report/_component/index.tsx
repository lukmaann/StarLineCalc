"use client";

import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import useNegativeFormStore from "@/store/negativeGridCostStore";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import useBatteryStore from "@/store/batteryStore";
import useCostStore from "@/store/finalStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";
import useNegativePastingFormStore from "@/store/negativePastingStore";
import Link from 'next/link';
import Image from 'next/image';

const ReportPageComponent = () => {
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

                    <Image src={"/starlinelogo.webp"} width={100} height={100} alt="logo" />
                    <div className="p-3 border-b border-gray-00">
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Final Report for {battery?.battery || 'Unknown Battery'}</h1>

                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 mb-4 text-sm">This is the total estimated amount for manufacturing the {battery?.battery} battery.</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y border border-black divide-gray-300">
                                <thead className="bg-black text-white ">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Serial Number</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Item</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Positive Plates</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.positivePlatesTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Negative Plates</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.negativePlatesTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Container</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.containerCost}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Packing Jali</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.packingJaliTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Battery Packing</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.batteryPackingCost}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Acid</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.acidTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Battery Screening</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.batteryScreeningCost}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">PVC Separator</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.pvcSepratorTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Plus Minus Caps</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.minusPlusCapsCost}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Lead</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.leadTotal}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Charging</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.chargingCost}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Labour</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">₹{cost.labourCost}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="px-4 py-2 border-t border-black text-sm font-bold text-gray-900 bg-gray-100">Total</td>
                                        <td className="px-4 py-2 text-sm font-bold border-t border-black text-gray-900 bg-gray-100">₹{cost.finalBatteryPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <Link href={"/"}>
                        <button className="bg-gray-500 text-white px-4 text-sm py-2 rounded hover:bg-gray-700">Back to calculator</button>
                    </Link>
                    <ReactToPrint
                        trigger={() => <button className="bg-blue-500 text-white px-4 text-sm py-2 rounded hover:bg-blue-700">Download as PDF</button>}
                        content={() => reportRef.current}
                        documentTitle={battery?.battery + "Report"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReportPageComponent;
