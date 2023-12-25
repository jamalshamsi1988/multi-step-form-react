import { useForm } from "react-hook-form";
export default function NewForm() {
const { register, formState: { errors }, handleSubmit } = useForm();

const onSubmit=(valus) =>{
    window.alert(JSON.stringify(valus,null, 2));
    
  }
return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <input {...register("firstName", { required: true })} />
   {errors.firstName?.type === 'required' && "First name is required"}
  
   <input {...register("lastName", { required: true })} />
   {errors.lastName && "Last name is required"}
  
   <input type="submit" />
  </form>
 );
 }