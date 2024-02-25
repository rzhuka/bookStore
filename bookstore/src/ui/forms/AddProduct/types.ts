import type { getFormDefaultValues } from "./useSchema";

export type FormState = Partial<ReturnType<typeof getFormDefaultValues>>;

export type AddProductProps = {
    readonly onSubmit: (book: FormState) => void;
    readonly defaultValues?: FormState;
}
