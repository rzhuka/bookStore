import { memo } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import type { Book } from "feature/product/types";
import { getFormDefaultValues, useSchema, validator } from "./useSchema";

type Props = {
    readonly defaultValues : any
}

const AddProductForm = ({ defaultValues }: Props) => {

    const schema = useSchema();

    const {
        control,
        handleSubmit,
        reset,
        formState: {
            isLoading,
            isSubmitting,
            isValid
        }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: 'onBlur'
    });

    const onSubmit = handleSubmit((data) => console.log(data))
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                columnGap: '10px',
                justifyContent: 'center',
            }}
        >
            <Controller
                control={control}
                name= 'title'
                rules={validator['title']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                    sx={{
                        width: 300,
                        mt: 1,
                        ml: 1
                    }}
                        {...field}
                        error={invalid}
                        helperText={error?.message}
                        label='Title'
                    />
                )}
            />
            <Controller
                control={control}
                name="description"
                rules={validator['description']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                        {...field}
                        sx={{
                            width: 300,
                            mt: 1,
                            ml: 1
                        }}
                        error={invalid}
                        helperText={error?.message}
                        label= 'Description'
                    />
                )}
            />
            <Controller
                control={control}
                name= 'author'
                rules={validator['author']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                        {...field}
                        sx={{
                            width: 300,
                            mt: 1,
                            ml: 1
                        }}
                        error={invalid}
                        helperText={error?.message}
                        label= 'Author'
                    />
                )}
            />
            <Controller
                control={control}
                name= 'subtitle'
                rules={validator['subtitle']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                        {...field}
                        sx={{
                            width: 300,
                            mt: 1,
                            ml: 1
                        }}
                        error={invalid}
                        helperText={error?.message}
                        label= 'Subtitle'
                    />
                )}
            />
            <Controller
                control={control}
                name= 'publisher'
                rules={validator['publisher']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                        {...field}
                        sx={{
                            width: 300,
                            mt: 1,
                            ml: 1
                        }}
                        error={invalid}
                        helperText={error?.message}
                        label= 'Publisher'
                    />
                )}
            />

            <Controller
                control={control}
                name= 'isbn'
                rules={validator['isbn']}
                render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                        {...field}
                        sx={{
                            width: 300,
                            mt: 1,
                            ml: 1
                        }}
                        error={invalid}
                        helperText={error?.message}
                        label= 'Isbn'
                    />
                )}
            />
            <LoadingButton
                sx={{
                    maxWidth: '100%',
                    borderRadius: '12px',
                }}
                fullWidth
                disabled={!isValid}
                loading={isLoading || isSubmitting}
            >
                Add new book
            </LoadingButton>
        </Box>
    );
};

AddProductForm.defaultProps = {
    defaultValues: getFormDefaultValues()
};

export default memo(AddProductForm);
