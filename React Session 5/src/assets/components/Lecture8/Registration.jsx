import React, { useState } from "react";
import { Formik } from "formik";

const Registration = () => {

    const data = [
        {
            id:1,
            name:"maharastra"
        },
        {
            id:2,
            name:"uttarpradesh",
        },
        {
            id:3,
            name:"patna"
        }
    ]

    const [state, setstate] = useState()

    const cities = [
        {
            cityid:1,
            name:"Mumbai",
            stateID:1
        },
        {
            cityid:2,
            name:"Pune",
            stateID:1
        },
        {
            cityid:3,
            name:"Nagpur",
            stateID:1
        },
        {
            cityid:4,
            name:"City 1",
            stateID:2
        },
           {
            cityid:5,
            name:"City 2",
            stateID:2
        },   {
            cityid:6,
            name:"City 3",
            stateID:2
        },
           {
            cityid:7,
            name:"City 1",
            stateID:3
        },   {
            cityid:8,
            name:"City 2",
            stateID:3
        },   {
            cityid:9,
            name:"City 3",
            stateID:3
        },
    ]

    // const [state,setstate]=useState()

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
           
            {errors.email && touched.email && errors.email}
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br />
            {errors.password && touched.password && errors.password}
            <br />
            <select
            
            name="state"
            onChange={(e)=>{
                handleChange(e)
                setstate(e.target.value)
                //  console.log(e.target.value)
            }}
            onBlur={handleBlur}
            value={values.state}
            >

            <option value="">Select</option>
            {
                data.map((state)=>{
                    return(
                        
                        <option value={state.id} key={state.id}>{state.name}</option>   
                    )
                })
            }
            </select>  
            <br />
            <div>
                <select name="city" id="city">
                    <option value="">Select</option>
                    <option value="" >{cities.map((e)=>{
                       return (
                        e.length && e.filter((e)=>{
                            return (
                                e.name
                            )
                        })
                       )
                    })}</option>
                </select>
            </div>
            
            <button type="submit" disabled={isSubmitting} >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
