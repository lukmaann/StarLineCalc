import  {create}  from "zustand"



interface FormStoreState {

    totalAmount: number;
    totalPlates:number;
    costPerPlate:number;

    setTotalAmount: (price: number) => void;
    setTotalPlates: (quantity: number) => void;
    setCostPerPlates:(price:number)=>void

}


const useFormStore=create<FormStoreState>((set)=>({
    totalAmount:0,
    totalPlates:0,
    costPerPlate:0,
    setTotalAmount:(pr)=>set({totalAmount:pr}),
    setCostPerPlates:(pr)=>set({costPerPlate:pr}),
    setTotalPlates:(plates)=>set({totalPlates:plates})
}))


export default useFormStore;


