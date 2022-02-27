import { useEffect, useState } from "react";

export function useLocalStorage<Type>(key: string, defaultValue: Type[]) : 
    [Type[], React.Dispatch<React.SetStateAction<Type[]>>]
{
    const [value, setValue] = useState<Type[]>(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        return defaultValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;