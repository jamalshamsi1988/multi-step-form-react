import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MultiStep = () => {

  const [formStep, setFormStep] = useState(0);

  const {watch,register,formState:{errors,isValid},handleSubmit}=useForm({mode:"all"})

  const completeStep = () => {
    setFormStep((curnt) => curnt + 1);
  };
  const renderButoon=()=>{
    if(formStep > 2 ){
        return <h1>Tamam</h1> 
    }else if(formStep === 2) {
        return <button type="submit" disabled={!isValid}  >Finsh</button>
    }else{
        return <button disabled={!isValid} type="button" onClick={completeStep}>Next</button>
    }
  }

  const submitForm=(valus) =>{
    window.alert(JSON.stringify(valus,null, 2));
    completeStep()
  }

  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
      {formStep === 0 && (<><label htmlFor="name">Name</label> <input name="name" id="name" type="text"
      {...register("Name", { required: true ,message:"please Type Your Name"})}
      /></>)}

      {errors.name && <p>{errors.name.message}</p>}
      <br />
      {formStep === 1 && (<><label htmlFor="lastName">Last Name</label> <input name="lastName" id="lastName" type="text"
     {...register("LastName", { required: true ,message:"please Type Your Last Name" })}
      /></>)}
      <br />
      {formStep === 2 && (<><label htmlFor="address">Address</label> <input name="address" id="address" type="text"
      {...register("address", { required: true ,message:"please Type Your Address"})}
      /></>)}
     { renderButoon()}
     <p>{JSON.stringify(watch(),null,2)}</p>
     </form>
    </div>
  );
};

export default MultiStep;
