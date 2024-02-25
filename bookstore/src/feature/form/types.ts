export type FormValidator = {
    readonly required: boolean;
    readonly type?: HTMLInputElement['type'];
    readonly minLength?: number;
    readonly maxLength?: number;
    readonly min?: number;
    readonly max?: number;
    readonly pattern?: RegExp;
};

export type FormProps<
    TFormData,
    TDefaultValues = TFormData,
    TSubmitResult = unknown
> = {
    readonly onSubmit: (data: TFormData) => TSubmitResult;
    readonly defaultValues?: TDefaultValues;
    readonly formId?: string;
};