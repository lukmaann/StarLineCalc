"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useEffect } from "react";
import useFormStore from "@/store/negativeGridCostStore";
import NegativeGridSummary from "./negativeGridSummary";
import useStore from "@/store/languageStore";

const NegativeGridCosting = () => {
    const { language } = useStore();

    const hindi = language === 'hindi';
    const {
        newRawPrice,
        oldRawPrice,
        setNewRawPrice,
        setOldRawPrice,
        setTotalPrice,
        setTotalRawMaterial,
        setTotalGrids,
        setCostPerPiece,
        setGridWeight
    } = useFormStore();

    const formik = useFormik({
        initialValues: {
            newRawMaterial: 500,
            newRawPrice: newRawPrice,
            oldRawMaterial: 0,
            oldRawPrice: newRawPrice, // Initial value is the same as newRawPrice
            gridWeight: 0.116,
            transport: 0,
            other: 0
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            const { newRawMaterial, newRawPrice, gridWeight, oldRawMaterial, other, oldRawPrice, transport } = values;

            const totalAmount = (Number(newRawMaterial) * Number(newRawPrice)) + (Number(oldRawMaterial) * Number(oldRawPrice) + (transport || 0) + (other || 0));
            const totalQuantity = Number(newRawMaterial) + Number(oldRawMaterial);
            const grids = Math.floor(totalQuantity / gridWeight);
            const costPerPiece = Math.ceil(totalAmount / grids) + (other || 0);

            // Updating Zustand store
            setTotalPrice(totalAmount);
            setTotalRawMaterial(totalQuantity);
            setTotalGrids(grids);
            setCostPerPiece(costPerPiece);
            setGridWeight(gridWeight)

            // Alert the result
            // alert(`Total Cost: ${totalAmount} \nTotal Quantity: ${totalQuantity} \nTotal Grids: ${grids} \nPrice Per Piece: ${costPerPiece}`);
        }
    });

    useEffect(() => {
        formik.setFieldValue('oldRawPrice', newRawPrice);
        setOldRawPrice(newRawPrice);
    }, [newRawPrice, setOldRawPrice]);

    return (
        <div className="bg-gradient-to-bl m-2 from-black via-gray-900 to-gray-800 border border-t-0 w-[50%] border-r-2 border-b-2 rounded-md max-lg:w-[45%] ">
            {hindi ? <h1 className="bg-gradient-to-br from-blue-500 via-blue-900 to-blue-500 text-white font-bold p-2 rounded-t-md">
                नेगेटिव ग्रिड कॉस्टिंग
            </h1> : <h1 className="bg-gradient-to-br from-blue-500 via-blue-900 to-blue-500 text-white font-bold p-2 rounded-t-md">
                Negative Grid Costing
            </h1>}
            <div className="flex">

                <form className="p-2 border-r" onSubmit={formik.handleSubmit}>
                    <div className="flex items-center mb-2">
                        <div className="flex flex-col w-1/2 pr-2">
                            {hindi ? <Label htmlFor="newRawMaterial" className="text-[10px]">नया रॉ लीड QT</Label> : <Label htmlFor="newRawMaterial" className="text-[10px]">New Raw Lead QT</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("newRawMaterial")}
                                    id="newRawMaterial"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[10px]">kg</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 pl-2">
                            {hindi ? <Label htmlFor="newRawPrice" className="text-[10px]">प्राइस</Label>:<Label htmlFor="newRawPrice" className="text-[10px]">Price</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("newRawPrice")}
                                    id="newRawPrice"
                                    type="number"
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        setNewRawPrice(value);
                                        formik.setFieldValue("newRawPrice", value);
                                    }}
                                />
                                <span className="ml-1 text-white text-[12px]">₹</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="flex flex-col w-1/2 pr-2">
                            {hindi ? <Label htmlFor="oldRawMaterial" className="text-[10px]">पुराना रॉ लीड QT</Label> : <Label htmlFor="oldRawMaterial" className="text-[10px]">Old Raw Lead QT</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("oldRawMaterial")}
                                    id="oldRawMaterial"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[10px]">kg</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 pl-2">
                            {hindi ? <Label htmlFor="oldRawPrice" className="text-[10px]">पुराना प्राइस</Label> : <Label htmlFor="oldRawPrice" className="text-[10px]">Old Price</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("oldRawPrice")}
                                    id="oldRawPrice"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[12px]">₹</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="flex flex-col w-1/2 pr-2">
                            {hindi ? <Label htmlFor="gridWeight" className="text-[10px]">ग्रिड वेट</Label> : <Label htmlFor="gridWeight" className="text-[10px]">Grid Weight</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("gridWeight")}
                                    id="gridWeight"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[10px]">gm</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 pl-2">
                            {hindi ? <Label htmlFor="transport" className="text-[10px]">ट्रांसपोर्ट चार्जेज़</Label> : <Label htmlFor="transport" className="text-[10px]">Transport Charges</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("transport")}
                                    id="transport"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[12px]">₹</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="flex flex-col w-1/2 pr-2">
                            {hindi ? <Label htmlFor="other" className="text-[10px]">अदर चार्जेज़</Label> : <Label htmlFor="other" className="text-[10px]">Other Charges</Label>}
                            <div className="flex items-center">
                                <Input
                                    className="w-[80%] h-7 text-black"
                                    {...formik.getFieldProps("other")}
                                    id="other"
                                    type="number"
                                />
                                <span className="ml-1 text-white text-[12px]">₹</span>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-gray-700"> Calculate</Button>
                </form>
                <NegativeGridSummary />
            </div>

        </div>
    );
};

export default NegativeGridCosting;
