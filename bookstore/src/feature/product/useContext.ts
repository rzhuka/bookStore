import { useContext as useReactContext } from 'react';
import { Context } from './context';

export default function useContext() {
    return useReactContext(Context);
};
