"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { useEffect } from "react";
import NegativePastingSummary from "./finalCostingSummary";
import useStore from "@/store/languageStore";
import items from "./data";
import useBatteryStore from "@/store/batteryStore";
import { useState } from "react";

import useNegativeFormStore from "@/store/negativeGridCostStore";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import useNegativePastingFormStore from "@/store/negativePastingStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";
import useCostStore from "@/store/finalStore";



interface FormValues {
    positivePlatesQuantity: number;
    positivePlatesPrice: number;
    positivePlatesTransport: number;

    negativePlatesQuantity: number;
    negativePlatesPrice: number;
    negativePlatesTransport: number;

    pvcSepratorQuantity: number;
    pvcSepratorPrice: number;
    pvcSepratorTransport: number;

    leadQuantity: number;
    leadPrice: number;
    leadTransport: number;

    packingJaliQuantity: number;
    packingJaliPrice: number;
    packingJaliTransport: number;

    dmWaterWeight: number;
    dmWaterPrice: number;
    dmWaterTransport: number;

    acidQuantity: number;
    acidPrice: number;
    acidTransport: number;



    container?: number;
    batteryPacking?: number;
    charging?: number;
    batteryScreening?: number;
    minusPLusCaps?: number;
    labour?: number;
}

const FinalCosting: React.FC = () => {
    const finalCostStore = useCostStore();
    const { battery } = useBatteryStore();
    const [initials, setInitials] = useState(items[battery]);

    const negativeGrid = useNegativeFormStore();
    const positiveGrid = usePositiveFormStore();
    const negativePasting = useNegativePastingFormStore();
    const positivePasting = usePositivePastingFormStore();






    useEffect(() => {
        setInitials(items[battery]);
    }, [battery]);

    useEffect(() => {
        if (initials) {
            formik.setValues({
                positivePlatesQuantity: initials.positivePlates || 0,
                positivePlatesPrice: Math.ceil(positiveGrid.costPerPiece / 2) + positivePasting.costPerPlate,
                positivePlatesTransport: 0,

                negativePlatesQuantity: initials.negativePlates || 0,
                negativePlatesPrice: Math.ceil(negativeGrid.costPerPiece / 2) + negativePasting.costPerPlate,
                negativePlatesTransport: 0,

                pvcSepratorQuantity: initials.pvcSepratorQt || 0,
                pvcSepratorPrice: 0,
                pvcSepratorTransport: 0,

                leadQuantity: initials.lead || 0,
                leadPrice: 0,
                leadTransport: 0,

                packingJaliQuantity: initials.packingJali || 0,
                packingJaliPrice: 0,
                packingJaliTransport: 0,

                dmWaterWeight: 40,
                dmWaterPrice: 2,
                dmWaterTransport: 0,

                acidQuantity: initials.acid || 0,
                acidPrice: 0,
                acidTransport: 0,

                container: initials.container || 0,
                batteryPacking: initials.batteryPacking || 0,
                charging: initials.charging || 0,
                batteryScreening: initials.batteryScreening || 0,
                minusPLusCaps: initials.minusPlusCap || 0,
                labour: initials.labour || 0,
            });
        }
    }, [initials, negativeGrid, negativePasting, positiveGrid, positivePasting]);




    const { language } = useStore();
    const hindi = language === 'hindi';
    const negativeStore = useNegativeFormStore();
    const negativePastingStore = useNegativePastingFormStore();

    const formik = useFormik<FormValues>({
        initialValues: {
            positivePlatesQuantity: initials.positivePlates,
            positivePlatesPrice: 0,
            positivePlatesTransport: 0,

            negativePlatesQuantity: initials.negativePlates,
            negativePlatesPrice: 0,
            negativePlatesTransport: 0,

            pvcSepratorQuantity: initials.pvcSepratorQt,
            pvcSepratorPrice: 0,
            pvcSepratorTransport: 0,

            leadQuantity: initials.lead,
            leadPrice: 0,
            leadTransport: 0,

            packingJaliQuantity: initials.packingJali,
            packingJaliPrice: 0,
            packingJaliTransport: 0,

            dmWaterWeight: 40,
            dmWaterPrice: 2,
            dmWaterTransport: 0,

            acidQuantity: initials.acid,
            acidPrice: 0,
            acidTransport: 0,



            container: initials.container,
            batteryPacking: initials.batteryPacking,
            charging: initials.charging,
            batteryScreening: initials.batteryScreening,
            minusPLusCaps: initials.minusPlusCap,
            labour: initials.labour
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            const {
                positivePlatesQuantity, positivePlatesPrice, positivePlatesTransport,
                negativePlatesQuantity, negativePlatesPrice, negativePlatesTransport,
                pvcSepratorQuantity, pvcSepratorPrice, pvcSepratorTransport,
                leadQuantity, leadPrice, leadTransport,
                packingJaliQuantity, packingJaliPrice, packingJaliTransport,
                dmWaterWeight, dmWaterPrice, dmWaterTransport,
                acidQuantity, acidPrice, acidTransport,
                container, batteryPacking, charging, batteryScreening, minusPLusCaps, labour
            } = values;


            const positivePlatesTotal = (positivePlatesPrice * positivePlatesQuantity + (positivePlatesTransport || 0));
            const negativePlatesTotal = (negativePlatesQuantity * negativePlatesPrice + (negativePlatesTransport || 0));
            const pvcSepratorTotal = (pvcSepratorQuantity * pvcSepratorPrice + (pvcSepratorTransport || 0));
            const leadTotal = (leadQuantity * leadPrice + (leadTransport || 0));
            const packingJaliTotal = (packingJaliQuantity * packingJaliPrice + (packingJaliTransport || 0));
            const acidTotal = (acidQuantity * acidPrice + (acidTransport || 0));


           

            




            const totalAmount =
                positivePlatesTotal + negativePlatesTotal + pvcSepratorTotal + leadTotal
                + packingJaliTotal + acidTotal +
                // (dmWaterWeight * dmWaterPrice + (dmWaterTransport || 0))   +
                (container || 0) +
                (batteryPacking || 0) +
                (charging || 0) + (batteryScreening || 0) + (minusPLusCaps || 0) + (labour || 0);

                finalCostStore.setBatteryPackingCost(batteryPacking||0);
                finalCostStore.setBatteryScreeningCost(batteryScreening||0);
                finalCostStore.setChargingCost(charging||0);
                finalCostStore.setContainerCost(container||0);
                finalCostStore.setLabourCost(labour||0);
                finalCostStore.setMinusPlusCapsCost(minusPLusCaps||0);
                finalCostStore.setPositivePlatesTotal(positivePlatesTotal);
                finalCostStore.setNegativePlatesTotal(negativePlatesTotal);
                finalCostStore.setAcidTotal(acidTotal);
                finalCostStore.setLeadTotal(leadTotal);
                finalCostStore.setPackingJaliTotal(packingJaliTotal);
                finalCostStore.setPvcSepratorTotal(pvcSepratorTotal);
                finalCostStore.setFinalBatteryPrice(totalAmount);
                            
        }
    });





    const calculateTotal = (weightField: keyof FormValues, priceField: keyof FormValues, transportField: keyof FormValues) => {
        const weight = formik.values[weightField] || 0;
        const price = formik.values[priceField] || 0;
        const transport = formik.values[transportField] || 0;
        return (weight * price + transport).toFixed(1);
    };

    return (
        <div className="bg-gradient-to-bl from-black via-gray-900 to-gray-800 border border-t-0 border-r-2 border-b-2 rounded-md max-lg:w-[90%]">
            <h1 className="bg-gradient-to-br from-green-500 via-green-900 to-green-500 text-white font-bold p-2 rounded-t-md">
                {hindi ? "फाइनल कॉस्टिंग" : "Final Costing"} For {battery}
            </h1>
            <div className="flex">
                <form className="p-2 border-r" onSubmit={formik.handleSubmit}>
                    <div className="grid m-2 text-sm grid-cols-5">
                        <div className="m-1 font-bold">{hindi ? "आइटम्स" : "Items"}</div>
                        <div className="m-1 font-bold">{hindi ? "क्वांटिटी" : "Quantity"}</div>
                        <div className="m-1 font-bold">{hindi ? "कीमत (₹)" : "Price (₹)"}</div>
                        <div className="m-1 font-bold">{hindi ? "ट्रांसपोर्ट (₹)" : "Transport (₹)"}</div>
                        <div className="m-1 font-bold">{hindi ? "कुल (₹)" : "Total (₹)"}</div>

                        <div className="m-1">{hindi ? "पॉज़िटिव प्लेट्स" : "Positive PLates"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("positivePlatesQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("positivePlatesPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("positivePlatesTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('positivePlatesQuantity', 'positivePlatesPrice', 'positivePlatesTransport')}</div>

                        <div className="m-1">{hindi ? "नेगेटिव प्लेट्स" : "Negative Plates"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("negativePlatesQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("negativePlatesPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("negativePlatesTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('negativePlatesQuantity', 'negativePlatesPrice', 'negativePlatesTransport')}</div>

                        <div className="m-1">{hindi ? "पीवीसी सेपरेटर" : "PVC Seprator"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("pvcSepratorQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("pvcSepratorPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("pvcSepratorTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('pvcSepratorQuantity', 'pvcSepratorPrice', 'pvcSepratorTransport')}</div>

                        <div className="m-1">{hindi ? "लीड" : "Lead"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("leadQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("leadPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("leadTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('leadQuantity', 'leadPrice', 'leadTransport')}</div>

                        <div className="m-1">{hindi ? "पैकिंग जाली." : "Packing Jali"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("packingJaliQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("packingJaliPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("packingJaliTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('packingJaliQuantity', 'packingJaliPrice', 'packingJaliTransport')}</div>

                        {/* <div className="m-1">{hindi ? "डीएम वाटर" : "DM Water"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterWeight")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('dmWaterWeight', 'dmWaterPrice', 'dmWaterTransport')}</div> */}

                        <div className="m-1">{hindi ? "एसिड" : "Acid "}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidQuantity")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('acidQuantity', 'acidPrice', 'acidTransport')}</div>


                    </div>
                    <hr />
                    <div className="flex w-[90%] justify-between">
                        <div className="py-2 text-sm flex justify-between w-full">
                            <div className="grid grid-cols-2 m-2">
                                <div className="m-1">{hindi ? "कंटेनर" : "Container"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("container")} className="h-7 w-[100px] text-black" type="number" /></div>

                                <div className="m-1">{hindi ? "बैटरी पैकिंग" : "Battery Packing"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("batteryPacking")} className="h-7 w-[100px] text-black" type="number" /></div>

                                <div className="m-1">{hindi ? "चार्जिंग" : "Charging"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("charging")} className="h-7 w-[100px] text-black" type="number" /></div>

                            </div>
                            <div className="grid grid-cols-2 m-2">
                                <div className="m-1">{hindi ? "बैटरी स्क्रीनिंग" : "Battery Screening"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("batteryScreening")} className="h-7 w-[100px] text-black" type="number" /></div>

                                <div className="m-1">{hindi ? "माइनसप्लस कैप" : "Minus Plus Caps"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("minusPLusCaps")} className="h-7 w-[100px] text-black" type="number" /></div>

                                <div className="m-1">{hindi ? "लेबर" : "Labour"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("labour")} className="h-7 w-[100px] text-black" type="number" /></div>

                            </div>
                        </div>

                    </div>

                    <Button type="submit" className="w-full bg-gray-700">Calculate</Button>
                </form>
                <NegativePastingSummary />
            </div>
        </div>
    );
};

export default FinalCosting;
