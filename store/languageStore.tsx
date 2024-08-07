import { create } from "zustand"




interface storeState {
    language: string,
    setLanguage: (language:string) => void
}

const useStore=create<storeState>((set)=>({
    language:"english",
    setLanguage:(language)=>set({language})
}))


export default useStore