import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import "../Lecture8Practice2/Registration.css";
import axios from "axios";
import { useRef } from "react";

const Registration = () => {
  const useReference = useRef();

  useEffect(() => {
    useReference.current.focus();
  }, []);
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
      cityid: 11,
      name: "Mumbai",
    },
    {
      stateid: 1,
      cityid: 22,
      name: "Pune",
    },
    {
      stateid: 1,
      cityid: 33,
      name: "Nagpur",
    },
    {
      stateid: 2,
      cityid: 12,
      name: "Indore",
    },
    {
      stateid: 2,
      cityid: 22,
      name: "Bhopal",
    },
    {
      stateid: 2,
      cityid: 33,
      name: "Jabalpur",
    },
    {
      stateid: 3,
      cityid: 11,
      name: "Panji",
    },
    {
      stateid: 3,
      cityid: 22,
      name: "Vaso Da Gama",
    },
    {
      stateid: 3,
      cityid: 33,
      name: "Margao",
    },
  ];
  // --------------------------------------------------

  // Subjects

  const subjects = ["Maths", "Physics", "Science", "Home Science"];

  // --------------------------------------------------

  const [changeState, setchangeState] = useState();
  console.log(typeof changeState);

  const citynames = city.filter((e) => e.stateid === Number(changeState));
  console.log(citynames);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          state: "",
          city: "",
          subjects: "",
        }}
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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);
          try {
            const response = await axios.post(`https`, values);
            console.log(response);
            resetForm("");
          } catch (error) {
            console.log(error, "error");
          }
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
              ref={useReference}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <br />
            <h3>Email ID</h3>
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
            <br />
            <h3>Password</h3>
            {errors.password && touched.password && errors.password}
            <br />
            <br />

            {/* ------------------------------ STATE ----------------------------------------------- */}
            <select
              name="state"
              onChange={(e) => {
                handleChange(e);
                setchangeState(e.target.value);
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
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            >
              <option>Select City</option>

              {citynames.map((e) => {
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
            {/* ----------------------------------------------------------------------------- */}
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "female"}
            />
            <label htmlFor="female">Female</label>
            {/* ----------------------------------------------------------------------------- */}

            <div className="check">
              {/* <div><input type="checkbox"  name='subjects' id='maths'/><label htmlFor="maths">Maths</label></div> 
    <div><input type="checkbox" name='subjects' id='physics'/><label htmlFor="physics">Physics</label></div> 
    <div><input type="checkbox" name='subjects' id='science'/><label htmlFor="science">Science</label></div> 
             */}

              <h4>Subject</h4>
              {subjects.map((e) => {
                return (
                  <div key={e}>
                    <input
                      type="checkbox"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={e}
                      id={e}
                      checked={values.subjects.includes(e)}
                    />
                    <label htmlFor={e}>{e}</label>
                  </div>
                );
              })}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
