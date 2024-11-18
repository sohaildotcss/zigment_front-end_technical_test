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

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check console for details.');
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg h-[600px]">
            <JsonEditor
              value={jsonValue}
              onChange={handleJsonChange}
              error={error}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[600px]">
            {!error && <DynamicForm schema={schema} onSubmit={handleSubmit} onDownload={downloadSubmissions} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
