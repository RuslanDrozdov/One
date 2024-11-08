import { useState } from "react";

function Mycomplite() {
  const [name, Setname] = useState("Erik");
  let [age, Setage] = useState(0);
  const [tagl, Settagl] = useState(false);

  const UpdateName = () => {
    Setname("Sergio");
  };

  const UpdateAge = () => {
    Setage(age + 2);
  };

  const DelCleqn = () => {
    Setage((age = 0));
  };

  const RetTagle = () => {
    Settagl(!tagl);
  };
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={UpdateName}>Name</button>
      <p>Age:{age}</p>
      <button onClick={UpdateAge}>Name</button>
      <button onClick={DelCleqn}>Cleaner</button>
      <p>Imploit:{tagl ? "Yess" : "Noub"}</p>
      <button onClick={RetTagle}>Name</button>
    </div>
  );
}
export default Mycomplite;
