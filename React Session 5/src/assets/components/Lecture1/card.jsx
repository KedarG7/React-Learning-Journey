import { useState } from "react";
import { useEffect } from "react";
import Person from "../../person.json";
import axios from "axios";

const Card = () => {
  const [person, setPerson] = useState([]);
  console.log("123", person);

  useEffect(() => {
    const hello = async () => {
      try {
        const userdata = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1",
        );
        console.log(userdata.data);
        setPerson(userdata.data);
      } catch (error) {
        // console.log('error')
      }
    };
    hello();
  }, []);

  return (
    <>
      <p>
        Person :{" "}
        {Person.map((e) => {
          return e.name;
        })}
      </p>

      <p>Outside Data : {person.title}</p>
    </>
  );
};

export default Card;
