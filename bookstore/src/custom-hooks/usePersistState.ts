import { AppException } from "exceptions/AppException";
import { useState } from "react";

type UsePersistState<TState> = {
    readonly persistKey: string;
    readonly initialState?: TState | (() => TState);
    //string literal type 
    readonly engine?:
    | 'sessionStorage'
    | 'localStorage';
};

export default function usePersistState<TState>({
    persistKey,
    initialState,
    engine = 'sessionStorage'
}: UsePersistState<TState>): [
    TState,
    (callback: (state: TState) => TState) => void
] {
    const getStorageState = () => {
        try {
            const state = window[engine].getItem(persistKey);
            if (!state) {
                throw new AppException(`State [${state}] is not defined`);
            }

            return JSON.parse(state);
        } catch {
            return null;
        }
    };

    const removeStorageState = () => window[engine].removeItem(persistKey);

    const persistStorageState = (state: TState) =>
        window[engine].setItem(persistKey, JSON.stringify(state));

    const updateStorageState = (state: TState) => {
        removeStorageState();
        persistStorageState(state);
    };


    const [state, _setState] = useState(() => getStorageState() ?? initialState as TState);

    const setState = (callback: (state: TState) => TState) =>
        _setState((state: TState) => {
            const newState = callback(state);

            updateStorageState(newState);

            return newState;
        });

    return [state, setState];
};
