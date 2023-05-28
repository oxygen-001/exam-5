import { useRef } from "react";
import "./add.css";
import { useAuth } from "../../hooks/useAuth";

export const Add = () => {
  const to = useRef();
  const email = useRef();
  const dataOfCliends = useRef();
  const term = useRef();
  const description = useRef();
  const price = useRef();
  const [token] = useAuth();

  const onAdd = (e) => {
    e.preventDefault();
    const valuesOfusers = {
      to: to.current.value,
      email: email.current.value,
      term: +term.current.value,
      createdDate: "Sun, 28 May 2023 18:27:25 GMT",
      description: description.current.value,
      price: +price.current.value,
      userId: 1,
      paid: true,
      dueDate: "Sun, 28 May 2023 18:27:25 GMT",
    };
    console.log(token);

    fetch("https://invoices-8ehs.onrender.com/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer " + token.accessToken
      },
      body: JSON.stringify(valuesOfusers),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="addDiv">
        <div className="addList">
          <h2 className="addH2">New Invoice</h2>

          <form onSubmit={onAdd} action="add">
            <div className="bigInputsDiv">
              <label className="addP" htmlFor="Name_of_clients">
                Client`s Name
              </label>
              <input
                ref={to}
                className="addBiginputs"
                id="Name_of_clients"
                type="text"
              />
            </div>

            <div className="bigInputsDiv">
              <label className="addP" htmlFor="Email_of_clients">
                Client`s Email
              </label>
              <input
                ref={email}
                className="addBiginputs"
                id="Email_of_clients"
                type="email"
              />
            </div>

            <div className="smallFlexAdd">
              <div className="bigInputsDiv">
                <label className="addP" htmlFor="Data_of_clients">
                  Due Date
                </label>
                <input
                  ref={dataOfCliends}
                  className="smallInpuds"
                  id="Data_of_clients"
                  type="date"
                />
              </div>

              <div className="bigInputsDiv">
                <label className="addP" htmlFor="term">
                  Payment Terms
                </label>
                <input
                  ref={term}
                  className="smallInpuds"
                  id="term"
                  type="text"
                />
              </div>
            </div>

            <div className="bigInputsDiv">
              <label className="addP" htmlFor="projectOfClients">
                Project Description
              </label>
              <input
                ref={description}
                className="addBiginputs"
                id="projectOfClients"
                type="text"
              />
            </div>

            <div className="bigInputsDiv">
              <label className="addP" htmlFor="Data_of_clients">
                Price
              </label>
              <input
                ref={price}
                className="addBiginputs"
                id="Data_of_clients"
                type="number"
              />
            </div>

            <button className="addButton">Save & Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
