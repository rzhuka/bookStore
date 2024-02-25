import { createContext } from "react";
import type useActions from "./useActions";

type ContextType = ReturnType<typeof useActions>;

export const Context = createContext<ContextType>({} as ContextType);
