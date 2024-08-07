import {create} from "zustand";


interface storeState{
    battery:string,
    setBattery:(battery:string)=>void
}

const useBatteryStore=create<storeState>((set)=>({
    battery:"SL35",
    setBattery:(bt)=>set({battery:bt})

}))


export default useBatteryStore;