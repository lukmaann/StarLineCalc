"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { useEffect } from "react";
import usePositiveFormStore from "@/store/positiveGridCostStore";
import usePositivePastingFormStore from "@/store/positivePastingStore";
import PositivePastingSummary from "./positivePastingSummary";
import useStore from "@/store/languageStore";

interface FormValues {
    greyOxideWeight: number;
    greyOxidePrice: number;
    greyOxideTransport: number;
    dinalFiberWeight: number;
    dinalFiberPrice: number;
    dinalFiberTransport: number;
    dmWaterWeight: number;
    dmWaterPrice: number;
    dmWaterTransport: number;
    acidWeight: number;
    acidPrice: number;
    acidTransport: number;
    machineOperator?: number;
    electricity?: number;
    other?: number;
    oxideWeight?: number;
    gridQuantity?:number
}

const PositivePastCost: React.FC = () => {
    const { language } = useStore();
    const hindi = language === 'hindi';
    const positiveStore = usePositiveFormStore();
    const negativePastingStore = usePositivePastingFormStore();

    const formik = useFormik<FormValues>({
        initialValues: {
            greyOxideWeight: 500,
            greyOxidePrice: 216,
            greyOxideTransport: 0,
            dinalFiberWeight: 1,
            dinalFiberPrice: 944,
            dinalFiberTransport: 0,
            dmWaterWeight: 40,
            dmWaterPrice: 2,
            dmWaterTransport: 0,
            acidWeight: 35,
            acidPrice: 9,
            acidTransport: 0,
            machineOperator: 0,
            electricity: 0,
            other: 0,
            oxideWeight: 0.214,
            gridQuantity:2300,
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            const {
                greyOxideWeight, greyOxidePrice, greyOxideTransport,
                dinalFiberWeight, dinalFiberPrice, dinalFiberTransport,
                dmWaterWeight, dmWaterPrice, dmWaterTransport,
                acidWeight, acidPrice, acidTransport,
                machineOperator, electricity, other, oxideWeight,gridQuantity
            } = values;

            const totalNegativePlates = Math.floor(greyOxideWeight / oxideWeight!) * 2;
            const totalAmount =
                (greyOxideWeight * greyOxidePrice + (greyOxideTransport || 0)) +
                (dinalFiberWeight * dinalFiberPrice + (dinalFiberTransport || 0)) +
                (dmWaterWeight * dmWaterPrice + (dmWaterTransport || 0)) +
                (acidWeight * acidPrice + (acidTransport || 0)) +
                (machineOperator || 0) +
                (electricity || 0) +
                (other || 0);

            const negativeGridCostingPerPiece = Math.ceil(positiveStore.costPerPiece / 2);
            // const pastingCostPerPiece = Math.ceil(totalAmount / gridQuantity! + negativeGridCostingPerPiece);
            const pastingCostPerPiece = Math.ceil(totalAmount / gridQuantity! )/2;



            negativePastingStore.setTotalAmount(totalAmount);
            negativePastingStore.setTotalPlates(totalNegativePlates);
            negativePastingStore.setCostPerPlates(pastingCostPerPiece);
        }
    });

    useEffect(() => {
        formik.setFieldValue('oxideWeight', parseFloat((0.390 - positiveStore.gridWeight).toFixed(3)));
    }, [positiveStore.gridWeight]);

    useEffect(() => {
        const greyOxideWeight = formik.values.greyOxideWeight;
        formik.setFieldValue('dinalFiberWeight', parseFloat((greyOxideWeight * 0.002).toFixed(1)));
        formik.setFieldValue('lugninWeight', parseFloat((greyOxideWeight * 0.004).toFixed(1)));
        formik.setFieldValue('carbonBlackWeight', parseFloat((greyOxideWeight * 0.003).toFixed(1)));
        formik.setFieldValue('graphitePowderWeight', parseFloat((greyOxideWeight * 0.001).toFixed(1)));
        formik.setFieldValue('dmWaterWeight', parseFloat((greyOxideWeight * 0.08).toFixed(1)));
        formik.setFieldValue('acidWeight', parseFloat((greyOxideWeight * 0.07).toFixed(1)));
        formik.setFieldValue('bariumSulfateWeight', parseFloat((greyOxideWeight * 0.015).toFixed(1)));
    }, [formik.values.greyOxideWeight]);

    const calculateTotal = (weightField: keyof FormValues, priceField: keyof FormValues, transportField: keyof FormValues) => {
        const weight = formik.values[weightField] || 0;
        const price = formik.values[priceField] || 0;
        const transport = formik.values[transportField] || 0;
        return (weight * price + transport).toFixed(1);
    };

    return (
        <div className="bg-gradient-to-bl from-black via-gray-900 to-gray-800 border border-t-0 border-r-2 border-b-2 rounded-md max-lg:w-[90%]">
            <h1 className="bg-gradient-to-br from-red-500 via-red-900 to-red-500 text-white font-bold p-2 rounded-t-md">
                {hindi ? "पॉजिटिव पेस्ट कॉस्टिंग" : "Positive Paste Costing"}
            </h1>
            <div className="flex">
                <form className="p-2 border-r" onSubmit={formik.handleSubmit}>
                    <div className="grid m-2 text-sm grid-cols-5">
                        <div className="m-1 font-bold">{hindi ? "आइटम्स" : "Items"}</div>
                        <div className="m-1 font-bold">{hindi ? "वजन (किग्रा)" : "Weight (kg)"}</div>
                        <div className="m-1 font-bold">{hindi ? "प्राइस (₹)" : "Price (₹)"}</div>
                        <div className="m-1 font-bold">{hindi ? "ट्रांसपोर्ट (₹)" : "Transport (₹)"}</div>
                        <div className="m-1 font-bold">{hindi ? "कुल (₹)" : "Total (₹)"}</div>

                        <div className="m-1">{hindi ? "ग्रे ऑक्साइड" : "Grey Oxide"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("greyOxideWeight")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("greyOxidePrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("greyOxideTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('greyOxideWeight', 'greyOxidePrice', 'greyOxideTransport')}</div>

                        <div className="m-1">{hindi ? "डिनल फाइबर" : "Dinal Fiber"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("dinalFiberWeight")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dinalFiberPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dinalFiberTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('dinalFiberWeight', 'dinalFiberPrice', 'dinalFiberTransport')}</div>

                        <div className="m-1">{hindi ? "डीएम वाटर" : "DM Water"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterWeight")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("dmWaterTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('dmWaterWeight', 'dmWaterPrice', 'dmWaterTransport')}</div>

                        <div className="m-1">{hindi ? "एसिड" : "Acid"}</div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidWeight")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidPrice")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1"><Input {...formik.getFieldProps("acidTransport")} className="h-7 text-black" type="number" /></div>
                        <div className="m-1">{calculateTotal('acidWeight', 'acidPrice', 'acidTransport')}</div>
                    </div>
                    <hr />
                    <div className="flex w-[90%] justify-between">
                        <div className="py-2 text-sm">
                            <h1 className="text-center bg-gray-600 text-white text-sm">{hindi ? "अन्य शुल्क" : "Other Charges"}</h1>
                            <div className="grid grid-cols-2 m-2">
                                <div className="m-1">{hindi ? "मशीन ऑपरेटर" : "Machine Operator"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("machineOperator")} className="h-7 w-[100px] text-black" type="number" /></div>
                                <div className="m-1">{hindi ? "बिजली" : "Electricity"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("electricity")} className="h-7 w-[100px] text-black" type="number" /></div>
                                <div className="m-1">{hindi ? "अन्य" : "Other"}</div>
                                <div className="m-1"><Input {...formik.getFieldProps("other")} className="h-7 w-[100px] text-black" type="number" /></div>
                            </div>
                        </div>
                        <div className="flex h-10 items-center m-2">
                            <div className="m-1 text-sm">{hindi ? "ऑक्साइड वजन" : "Oxide Weight"}</div>
                            <div className="m-1"><Input {...formik.getFieldProps("oxideWeight")} className="h-7 w-[100px] text-black" type="number" /></div>
                        </div>
                        <div className="flex bg-yellow-400 px-2 rounded-md  h-10 items-center m-2 text-black">
                            <div className="m-1 text-sm">{hindi ? "ऑक्साइड वजन" : "Grid Quantity"}</div>
                            <div className="m-1"><Input {...formik.getFieldProps("gridQuantity")} className="h-7 w-[100px] text-black" type="number" /></div>
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-gray-700"> Calculate</Button>
                </form>
                <PositivePastingSummary />
            </div>
        </div>
    );
};

export default PositivePastCost;
