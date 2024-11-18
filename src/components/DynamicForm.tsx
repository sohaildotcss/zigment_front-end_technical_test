import React from 'react';
import { useForm, RegisterOptions } from 'react-hook-form';
import { FormSchema } from '../types/formTypes';

interface DynamicFormProps {
  schema: FormSchema;
  onSubmit: (data: any) => void;
  onDownload: (data: any) => void;
  darkMode: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema, onSubmit, onDownload, darkMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data: any) => {
    onSubmit(data);
  };

  const renderField = (field: FormSchema['fields'][0]) => {
    const validationRules: RegisterOptions = {
      required: field.required ? 'This field is required' : false,
    };

    if (field.validation?.pattern) {
      validationRules.pattern = {
        value: new RegExp(field.validation.pattern),
        message: field.validation.message || 'Invalid format',
      };
    }

    const commonProps = {
      ...register(field.name, validationRules),
      className: `w-full p-2 border rounded-lg ${
        errors[field.name] ? 'border-red-500' : 'border-gray-300'
      } ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        register(field.name).onChange(e);
      },
    };

    switch (field.type) {
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select...</option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return <textarea {...commonProps} rows={4} />;
      case 'checkbox':
        return (
          <input
            type="checkbox"
            {...register(field.name)}
            className={`w-4 h-4 text-blue-600 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
          />
        );
      default:
        return <input type={field.type} {...commonProps} />;
    }
  };

  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-xl font-bold mb-4">{schema.title}</h2>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6 flex-grow">
        {schema.fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderField(field)}
            {errors[field.name] && (
              <p className="text-red-500 text-sm">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white`}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => onDownload(schema)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Download Submissions as JSON
        </button>
      </form>
    </div>
  );
};

export default DynamicForm; 