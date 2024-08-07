"use client"
import { Button } from "@/components/ui/button"
import useBatteryStore from "@/store/batteryStore"



const batteries = ["SL35",
    "SL40",
    "SL60",
    "SL70",
    "SL75",
    "SL80",
    "SL90",
    "SL100",
    "SL120",
    "SL130",
    "SL150",
    "SL180",
    "B23"
]

const BatteryList = () => {
    const {setBattery,battery}=useBatteryStore();
    const handleClick=(bt:string)=>{
      
        setBattery(bt);
      
       

    }
    return <div className="flex flex-wrap gap-2 justify-start ">
        {
            batteries.map((item,index)=>{
                return <Button key={index} onClick={()=>handleClick(item)}>{item}</Button>
            })
        }


    </div>
}

export default BatteryList;