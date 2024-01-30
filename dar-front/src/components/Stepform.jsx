import React, { useState } from 'react';

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    idNumber: '',
    dob: '',
    secondPhone: '',
    nationality: '',
  });

  const steps = [
    {
      label: 'Datos personales',
      fields: [
        { name: 'firstName', label: 'Nombres', type: 'text' },
        { name: 'lastName', label: 'Apellidos', type: 'text' },
        { name: 'email', label: 'Correo electrónico', type: 'email' },
        { name: 'phone', label: 'Celular o teléfono', type: 'tel' },
        { name: 'gender', label: 'Sexo:', type: 'radio', options: ['O', 'Masculino', 'Femenino'] },
      ],
    },
    // Add more steps here
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <h2>{steps[step].label}</h2>
      {steps[step].fields.map((field) => (
        <div key={field.name}>
          {field.type === 'radio' ? (
            <>
              {field.options.map((option, index) => (
                <div key={option}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={field.name}>{option}</label>
                </div>
              ))}
            </>
          ) : (
            <>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            </>
          )}
        </div>
      ))}
      <button onClick={handlePrev} disabled={step === 0}>
        Anterior
      </button>
      <button onClick={handleNext} disabled={step === steps.length - 1}>
        Siguiente
      </button>
    </div>
  );
};

export default StepForm;