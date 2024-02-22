import type  { Book } from "feature/product/types";
import type { FormValidator } from "feature/form/types";
import { object, ref, string } from "yup";

export const getFormDefaultValues = () => ({
    title: '',
    description: '',
    author: '',
    subtitle: '',
    publisher: '',
    isbn: ''
});

export const validator: Record<keyof Book, FormValidator> = {
    title: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    description: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    author: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    subtitle: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    publisher: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    isbn: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    pages: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
};

export const useSchema = () => {
    return object()
        .shape({
            title: string()
                .min(validator['title'].minLength!, `Title should be at least ${validator.title.minLength} characters long`)
                .max(validator['title'].maxLength!, `Title should be at maximum ${validator.title.maxLength} characters long`)
                .required(),
        
        });
};
