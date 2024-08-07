// store.ts
import { create } from "zustand";

interface FormStoreState {
  newRawPrice: number;
  oldRawPrice: number;
  totalPrice: number;
  totalRawMaterial: number;
  totalGrids: number;
  costPerPiece: number;
  newRawMaterial: number;
  oldRawMaterial: number;
  gridWeight:number;

  setNewRawPrice: (price: number) => void;
  setOldRawPrice: (price: number) => void;
  setTotalPrice: (price: number) => void;
  setTotalRawMaterial: (quantity: number) => void;
  setTotalGrids: (grids: number) => void;
  setCostPerPiece: (cost: number) => void;
  setNewRawMaterial: (qt: number) => void;
  setOldRawMaterial: (qt: number) => void;
  setGridWeight:(wg:number)=>void;

  saveData: () => void;
  loadData: () => void;
}

const useFormStore = create<FormStoreState>((set) => ({
  newRawPrice: 262,
  oldRawPrice: 0,
  totalPrice: 0,
  totalRawMaterial: 0,
  totalGrids: 0,
  costPerPiece: 0,
  newRawMaterial: 0,
  oldRawMaterial: 0,
  gridWeight:0.116,

  setNewRawPrice: (price) => set({ newRawPrice: price }),
  setOldRawPrice: (price) => set({ oldRawPrice: price }),
  setTotalPrice: (price) => set({ totalPrice: price }),
  setTotalRawMaterial: (quantity) => set({ totalRawMaterial: quantity }),
  setTotalGrids: (grids) => set({ totalGrids: grids }),
  setCostPerPiece: (cost) => set({ costPerPiece: cost }),
  setNewRawMaterial: (qt) => set({ newRawMaterial: qt }),
  setOldRawMaterial: (qt) => set({ newRawMaterial: qt }),
  setGridWeight:(wg)=>set({gridWeight:wg}),

  saveData: () => {
    const state = JSON.stringify({
      newRawPrice: useFormStore.getState().newRawPrice,
      oldRawPrice: useFormStore.getState().oldRawPrice,
      totalPrice: useFormStore.getState().totalPrice,
      totalRawMaterial: useFormStore.getState().totalRawMaterial,
      totalGrids: useFormStore.getState().totalGrids,
      costPerPiece: useFormStore.getState().costPerPiece,
    });
    localStorage.setItem("negativeGridCosting", state);
    alert("Data saved");
  },
  loadData: () => {
    const state = localStorage.getItem("negativeGridCosting");
    if (state) {
      const parsedState = JSON.parse(state);
      set(parsedState);
    }
  },
}));

export default useFormStore;
