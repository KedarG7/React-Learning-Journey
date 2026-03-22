import React, { useState } from 'react'
import { Formik } from 'formik';



const Registration = () => {
  // STATE DATA --------------------------(ARRAY - To be maped)

  const state = [
    {
      stateid: 1,
      name: "Maharastra",
    },
    {
      stateid: 2,
      name: "Madhya Pradesh",
    },
    {
      stateid: 3,
      name: "Goa",
    },
  ];
  // --------------------------------------------------

  // CITY DATA-------------------------------------(ARRAY - To be mapped)

  const city = [
    {
      stateid: 1,
      cityid: 1,
      name: "Mumbai",
    },
    {
      stateid: 1,
      cityid: 2,
      name: "Pune",
    },
    {
      stateid: 1,
      cityid: 3,
      name: "Nagpur",
    },
    {
      stateid: 2,
      cityid: 1,
      name: "Indore",
    },
    {
      stateid: 2,
      cityid: 2,
      name: "Bhopal",
    },
    {
      stateid: 2,
      cityid: 3,
      name: "Jabalpur",
    },
    {
      stateid: 3,
      cityid: 1,
      name: "Panji",
    },
    {
      stateid: 3,
      cityid: 2,
      name: "Vaso Da Gama",
    },
    {
      stateid: 3,
      cityid: 3,
      name: "Margao",
    },
  ];
  // --------------------------------------------------

  const [changeState,setchangeState] = useState('')


  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", state: "", city: "" }}
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
          <form onSubmit={handleSubmit} id="form1">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            />
            {errors.email && touched.email && errors.email}
            <br />
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <br />
            <br />
            <br />

            {/* ------------------------------ STATE ----------------------------------------------- */}
            <select
              type=""
              name="state"
              onChange={(e) => {
                handleChange(e);
                setchangeState(e.target.value);
                //  console.log(e.target.value)
              }}
              onBlur={handleBlur}
              value={values.state}
            >
              <option value=" ">Select State</option>
              {state.map((state) => {
                return (
                  <option value={state.stateid} key={state.stateid}>
                    {state.name}
                  </option>
                );
              })}
            </select>

            {/* ----------------------------------------------------------------------------- */}

            <br />
            <br />
            {/* ----------------------------------- CITY ------------------------------------------ */}

            <select
              type=""
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            >
              <option value="">Select City</option>
              {city
                .filter((e) => e.stateid == changeState)
                .map((e) => {
                  return (
                    <option value={e.cityid} key={e.cityid}>
                      {e.name}
                    </option>
                  );
                })}
            </select>

            {/* ----------------------------------------------------------------------------- */}

            <br />
            <br />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
 
 
}

export default Registration