import { FC, memo } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import { getFormDefaultValues, useSchema, validator } from "./useSchema";
import type { AddProductProps } from "./types";

const AddProductForm: FC<AddProductProps> = ({ defaultValues, onSubmit }) => {

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
        defaultValues: {
            ...defaultValues,
            ...getFormDefaultValues()
        },
        mode: 'onBlur'
    });

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(formState => {
                onSubmit(formState);
                reset();
            })}
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                columnGap: '10px',
                justifyContent: 'center',
            }}
        >
            <Controller
                control={control}
                name='title'
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
                        label='Description'
                    />
                )}
            />
            <Controller
                control={control}
                name='author'
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
                        label='Author'
                    />
                )}
            />
            <Controller
                control={control}
                name='subtitle'
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
                        label='Subtitle'
                    />
                )}
            />
            <Controller
                control={control}
                name='publisher'
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
                        label='Publisher'
                    />
                )}
            />

            <Controller
                control={control}
                name='isbn'
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
                        label='Isbn'
                    />
                )}
            />
            <Controller
                control={control}
                name='year'
                rules={validator['year']}
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
                        label='Year'
                    />
                )}
            />
            <LoadingButton
                type='submit'
                sx={{
                    maxWidth: '100%',
                    borderRadius: '12px',
                    gridColumn: '1 / -1',
                    mt:2,
                    height: '40px',
                    width: '200px',
                    justifySelf: 'center'
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
