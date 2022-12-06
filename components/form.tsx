import { ComponentProps, PropsWithChildren } from "react";
import { FormProvider, SubmitHandler, useForm, UseFormProps } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";

type FormProps<T extends FieldValues = FieldValues, TContext = any> = PropsWithChildren<
  UseFormProps<T, TContext> & {
    onSubmit: SubmitHandler<T>;
    formProps?: ComponentProps<"form">;
  }
>;

export function Form<TFieldValues extends FieldValues = FieldValues, TContext = any>({
  onSubmit,
  children,
  formProps,
  ...useFormProps
}: FormProps<TFieldValues, TContext>) {
  const methods = useForm<TFieldValues, TContext>(useFormProps);
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form {...formProps} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
