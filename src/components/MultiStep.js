import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./MultiStep.module.css";
const MaxSetp = 4;

const MultiStep = () => {
  const [formStep, setFormStep] = useState(0);

  const {
    watch,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all" });

  const completeStep = () => {
    setFormStep((curnt) => curnt + 1);
  };
  const renderButoon = () => {
    if (formStep > 3) {
      return <h1>The Form Is Completed</h1>;
    } else if (formStep === 3) {
      return (
        <button type="submit" disabled={!isValid} >
          Finsh
        </button>
      );
    } else {
      return (
        <button  disabled={!isValid} type="button" onClick={completeStep}>
          Next
        </button>
      );
    }
  };

  const submitForm = (valus) => {
    window.alert(JSON.stringify(valus, null, 2));
    completeStep();
  };

  const goToPreviousStep = () => {
    setFormStep((curnt) => curnt - 1);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        {formStep < MaxSetp && (
          <div className={styles.formStepCunt}>
            <p>
              {formStep > 0 && (
                <button onClick={goToPreviousStep} type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="4"
                    stroke="currentColor"
                    class="w-6 h-6"
                    width={12}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}
              Step {formStep + 1} of {MaxSetp}
            </p>
          </div>
        )}
        {formStep === 0 && (
          <>
            <label htmlFor="name">Name</label>{" "}
            <input
              name="name"
              id="name"
              type="text"
              {...register("Name", {
                required: true,
                message: "please Type Your Name",
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </>
        )}

        {formStep === 1 && (
          <>
            <label htmlFor="lastName">Last Name</label>{" "}
            <input
              name="lastName"
              id="lastName"
              type="text"
              {...register("LastName", {
                required: true,
                message: "please Type Your Last Name",
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </>
        )}

        {formStep === 2 && (
          <>
            <label htmlFor="address">Address</label>{" "}
            <input
              name="address"
              id="address"
              type="text"
              {...register("address", {
                required: true,
                message: "please Type Your Address",
              })}
            />
            {errors.address && <p>{errors.address.message}</p>}
          </>
        )}

        {formStep === 3 && (
          <div className={styles.checkbox}>
            <div>
              <input
                type="checkbox"
                name="ac"
                id="ac"
                {...register("ac", {
                  required: true,
                  message: "please accepted",
                })}
              />
              <label htmlFor="ac">I accepted all</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="re"
                id="ac"
                {...register("re", {
                  required: true,
                  message: "please accepted",
                })}
              />
              <label htmlFor="re">I agry with all</label>
            </div>
          </div>
        )}
        {renderButoon()}
        <p>{JSON.stringify(watch(), null, 2)}</p>
      </form>
    </div>
  );
};

export default MultiStep;
