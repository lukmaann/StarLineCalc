// src/store/costStore.ts
import create from 'zustand';

interface CostState {
    positivePlatesTotal: number;
    negativePlatesTotal: number;
    containerCost: number;
    batteryPackingCost: number;
    chargingCost: number;
    batteryScreeningCost: number;
    minusPlusCapsCost: number;
    labourCost: number;
    packingJaliTotal: number;
    acidTotal: number;
    leadTotal: number;
    pvcSepratorTotal: number;
    finalBatteryPrice:number;



    setPositivePlatesTotal: (cost: number) => void;
    setNegativePlatesTotal: (cost: number) => void;
    setContainerCost: (cost: number) => void;
    setBatteryPackingCost: (cost: number) => void;
    setChargingCost: (cost: number) => void;
    setBatteryScreeningCost: (cost: number) => void;
    setMinusPlusCapsCost: (cost: number) => void;
    setLabourCost: (cost: number) => void;
    setPackingJaliTotal: (cost: number) => void;
    setAcidTotal: (cost: number) => void;
    setLeadTotal: (cost: number) => void;
    setPvcSepratorTotal: (cost: number) => void;
    setFinalBatteryPrice:(cost:number)=>void
}

const useCostStore = create<CostState>((set) => ({
    positivePlatesTotal: 0,
    negativePlatesTotal: 0,
    containerCost: 0,
    batteryPackingCost: 0,
    chargingCost: 0,
    batteryScreeningCost: 0,
    minusPlusCapsCost: 0,
    labourCost: 0,
    packingJaliTotal: 0,
    acidTotal: 0,
    leadTotal: 0,
    pvcSepratorTotal: 0,
    finalBatteryPrice:0,



    setPositivePlatesTotal: (cost) => set({ positivePlatesTotal: cost }),
    setNegativePlatesTotal: (cost) => set({ negativePlatesTotal: cost }),
    setContainerCost: (cost) => set({ containerCost: cost }),
    setBatteryPackingCost: (cost) => set({ batteryPackingCost: cost }),
    setChargingCost: (cost) => set({ chargingCost: cost }),
    setBatteryScreeningCost: (cost) => set({ batteryScreeningCost: cost }),
    setMinusPlusCapsCost: (cost) => set({ minusPlusCapsCost: cost }),
    setLabourCost: (cost) => set({ labourCost: cost }),
    setPackingJaliTotal: (cost) => set({ packingJaliTotal: cost }),
    setAcidTotal: (cost) => set({ acidTotal: cost }),
    setLeadTotal: (cost) => set({ leadTotal: cost }),
    setPvcSepratorTotal: (cost) => set({ pvcSepratorTotal: cost }),
    setFinalBatteryPrice:(cost)=>set({finalBatteryPrice:cost})
}));

export default useCostStore;
