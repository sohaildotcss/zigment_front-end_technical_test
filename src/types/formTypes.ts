export type FieldType = 'text' | 'number' | 'email' | 'select' | 'textarea' | 'checkbox';

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string | number }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormSchema {
  title: string;
  fields: FormField[];
} 