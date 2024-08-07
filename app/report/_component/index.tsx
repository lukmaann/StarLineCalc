'use client';

import { useRef } from 'react';
// import html2pdf from 'html2pdf.js';
import useNegativeFormStore from "@/store/negativeGridCostStore";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import useBatteryStore from "@/store/batteryStore";
import useCostStore from "@/store/finalStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";
import useNegativePastingFormStore from "@/store/negativePastingStore";

const ReportPageComponent = () => {
    const positiveGrid = usePositiveFormStore();
    const negativeGrid = useNegativeFormStore();
    const positivePasting = usePositivePastingFormStore();
    const negativePasting = useNegativePastingFormStore();
    const battery = useBatteryStore();
    const cost = useCostStore();
    const reportRef = useRef(null);

    const positiveGridPerPiece = positiveGrid?.costPerPiece ? Math.ceil(positiveGrid.costPerPiece / 2) : 0;
    const negativeGridPerPiece = negativeGrid?.costPerPiece ? Math.ceil(negativeGrid.costPerPiece / 2) : 0;
    const positivePastingPerPiece = positivePasting?.costPerPlate || 0;
    const negativePastingPerPiece = negativePasting?.costPerPlate || 0;

    // const downloadPDF = () => {
    //     setTimeout(() => { // Add a delay to ensure content is rendered
    //         const element = reportRef.current;
    //         if (element) {
    //             const opt = {
    //                 margin: 1,
    //                 filename: 'report.pdf',
    //                 image: { type: 'jpeg', quality: 0.98 },
    //                 html2canvas: { scale: 2 },
    //                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //             };
    //             html2pdf().from(element).set(opt).save();
    //         }
    //     }, 100); // Adjust delay if necessary
    // };

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <div  className="bg-white shadow-lg rounded-lg overflow-hidden w-full w-[900px] mx-auto">
                <div ref={reportRef}>

                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-semibold text-gray-800">Final Report for {battery?.battery || 'Unknown Battery'}</h1>
                </div>
                <div className="p-6" >
                    {/* <table className="min-w-full divide-y divide-gray-300 mb-8">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Item</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Total Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={4}>Individual Pricing</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Positive Grid per piece</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{positiveGridPerPiece}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Negative Grid per piece</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{negativeGridPerPiece}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Positive Pasting per piece</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{positivePastingPerPiece}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Negative Pasting per piece</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{negativePastingPerPiece}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={2}>Individual Pricing After Pasting</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Positive Plate</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{positiveGridPerPiece + positivePastingPerPiece}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Negative Plate</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{negativeGridPerPiece + negativePastingPerPiece}</td>
                            </tr>
                        </tbody>
                    </table> */}

                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Serial Number</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Item</th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Total Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Positive Plates</td>


                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.positivePlatesTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Negative Plates</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.negativePlatesTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Container</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.containerCost}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Packing Jali</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.packingJaliTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Battery Packing</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.batteryPackingCost}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Acid</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.acidTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Battery Screening</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.batteryScreeningCost}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">PVC Separator</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.pvcSepratorTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Plus Minus Caps</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.minusPlusCapsCost}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Lead</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.leadTotal}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Charging</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.chargingCost}</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Labour</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹{cost.labourCost}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-100">Total</td>
                                <td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-100">₹{cost.finalBatteryPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>

                <div className="p-6">
                    {/* <button
                        onClick={downloadPDF}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Download as PDF
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default ReportPageComponent;
