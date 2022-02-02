import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0){
      alert('formulario enviado');
      // setLoading(true);
    } else {
      alert('formulario NO enviado');
      return;
    }
  }
  
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));

    if(form.dni.trim() && form.pin.trim()){
      handleSubmit(e);
    } else {
      return;
    }
  }

  return {
    form,
    errors,
    loading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
