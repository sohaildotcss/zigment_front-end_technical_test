# Dynamic Form Generator

A React application that generates dynamic forms from JSON schemas in real-time. Built with TypeScript, React 18, and Tailwind CSS.

## Features

- Real-time form generation from JSON schema
- Split-screen interface with JSON editor and form preview
- JSON validation with error messages
- Form validation and error handling
- Mobile-responsive design
- Dark mode support
- Download form submissions as JSON
- Copy form JSON to clipboard

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Playwright (E2E testing)
- Jest & React Testing Library (Unit testing)

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sohaildotcss/zigment_front-end_technical_test.git
   ```
2. **Install dependencies**: Install required dependencies using `npm install`.
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Run tests**:
   - **Unit tests**:
     ```bash
     npm test
     ```
   - **E2E tests**:
     ```bash
     npm run test:e2e
     ```

---

## Example JSON Schemas

### Simple Form Schema
```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ]
}
```

### Supported Field Types
- Text
- Email
- Select
- Textarea
- Checkbox
- Radio

---

## Local Development Guide

1. **Fork the repository**:
   ```bash
   git fork https://github.com/sohaildotcss/zigment_front-end_technical_test.git
   ```
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**.

---

## Testing

### Unit Tests
- Component rendering
- Form validation
- JSON validation
- Dark mode functionality
- Event handling

### E2E Tests
- Form generation
- Form submission
- Responsive layout
- Error scenarios
- JSON validation

---

