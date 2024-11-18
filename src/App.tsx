import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import DynamicForm from './components/DynamicForm';
import { FormSchema } from './types/formTypes';

const defaultSchema: FormSchema = {
  title: "Contact Form",
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      validation: {
        pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        message: "Please enter a valid email address"
      }
    }
  ]
};

function App() {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(defaultSchema, null, 2));
  const [error, setError] = useState<string>();
  const [schema, setSchema] = useState<FormSchema>(defaultSchema);
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleJsonChange = (value: string) => {
    setJsonValue(value);
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed);
      setError(undefined);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSuccessMessage('Form submitted successfully!');
    console.log('Form submitted successfully! Check console for details.');
  };

  const copyFormJSON = () => {
    navigator.clipboard.writeText(jsonValue).then(() => {
      alert("Form JSON copied to clipboard!");
    });
  };

  const downloadSubmissions = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form_submissions.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Dynamic Form Generator
        </h1>
        <button onClick={copyFormJSON} className="mb-4 p-2 bg-blue-500 text-white rounded">Copy Form JSON</button>
        <button onClick={toggleDarkMode} className="mb-4 p-2 bg-gray-700 text-white rounded">{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        
        {successMessage && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg h-[600px]">
            <JsonEditor
              value={jsonValue}
              onChange={handleJsonChange}
              error={error}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[600px] relative flex items-center justify-center">
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              !error && <DynamicForm schema={schema} onSubmit={handleSubmit} onDownload={downloadSubmissions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
