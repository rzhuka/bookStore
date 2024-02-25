import { FC, PropsWithChildren } from "react";
import { Context } from "./context";
import useActions from "./useActions";

const Provider: FC<PropsWithChildren> = props => (
    <Context.Provider
        {...props}
        value={useActions()}
    />
);

Provider.displayName = 'ProductProvider';

export default Provider;
