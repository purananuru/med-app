import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./SymptomList.module.css";

let disorderCategories = [];

const SymptomList = ({ symptoms, onAdd }) => {
  const [disorderName, setDisorderName] = useState("");
  const [configSymptoms, setconfigSymptoms] = useState([]);

  const initconfigSymptons = () => {
    const tmpSymptoms = symptoms[0].categories.map((symptom) =>
      1 === 1
        ? { ...symptom, cat_cb_state: false, sub_cat_cb_value: "" }
        : symptom
    );
    setconfigSymptoms(tmpSymptoms);
  };

  useEffect(() => {
    initconfigSymptons();
    disorderCategories = [];
  }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(`${name} is ${value} is ${checked}`);

    if (checked) {
      if (name === "symptoms") {
        setconfigSymptoms(
          configSymptoms.map((e) =>
            e.category === value ? { ...e, cat_cb_state: true } : e
          )
        );
      } else {
        // configSymptoms.forEach((e) =>
        //   console.log(
        //     `SUB category=${e.category} name=${name} value=${value} state=${
        //       e.sub_cat_cb_value
        //     } sub_category=${e.sub_category} valfound=${
        //       e.category == name && e.sub_category.includes(value)
        //     }`
        //   )
        // );
        setconfigSymptoms(
          configSymptoms.map((e) =>
            e.category === name && e.sub_category.includes(value)
              ? { ...e, cat_cb_state: true, sub_cat_cb_value: value }
              : e
          )
        );
      }
    } else {
      if (name === "symptoms") {
        setconfigSymptoms(
          configSymptoms.map((e) =>
            e.category === value
              ? { ...e, cat_cb_state: "false", sub_cat_cb_value: "" }
              : e
          )
        );
      }
    }
  };

  const assembleDisorderCategories = () => {
    disorderCategories = [];
    const selectedSymptoms = configSymptoms.filter(
      (e) => e.cat_cb_state === true && e.sub_cat_cb_value !== ""
    );
    selectedSymptoms.forEach((e) => {
      console.log(`${e.category} ${e.cat_cb_state} ${e.sub_cat_cb_value}`);
      disorderCategories = [
        ...disorderCategories,
        { category: e.category, sub_category: e.sub_cat_cb_value },
      ];
    });
  };

  const onSubmit = (e) => {
    assembleDisorderCategories();
    console.log(`disorderCategories length = ${disorderCategories.length}`);

    if (!disorderName) {
      alert("Please add a Disorder Name");
      return;
    }

    onAdd({ disorderCategories, disorderName });

    setDisorderName("");
    disorderCategories = [];
    initconfigSymptons();
    e.preventDefault();
    //unclick all checkboxes
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Disorder Name</label>
          <input
            type="disorderName"
            placeholder="Add Disorder"
            value={disorderName}
            onChange={(e) => setDisorderName(e.target.value)}
          />
          <input
            type="submit"
            value="Save Disorder"
            className="btn btn-block"
          />
        </div>
      </form>
      <span className={classes.symptoms}>
        {symptoms[0].categories.map((symptom) => (
          <Card key={Math.floor(Math.random() * 10000) + 1}>
            <span>
              <h3>
                <input
                  type="checkbox"
                  name="symptoms"
                  value={symptom.category}
                  id={symptom.category}
                  onChange={handleChange}
                  checked={
                    configSymptoms.filter(
                      (e) =>
                        e.category === symptom.category &&
                        e.cat_cb_state === true
                    ).length > 0
                  }
                />
                &nbsp;
                <label htmlFor="flexCheckDefault">{symptom.category}</label>
              </h3>
              <ul>
                {symptom.sub_category.map((sub, index) => (
                  <span
                    style={{ display: "inline" }}
                    key={Math.floor(Math.random() * 10000) + 1}
                  >
                    <input
                      style={{ display: "inline" }}
                      type="radio"
                      name={symptom.category}
                      value={sub}
                      id={Math.floor(Math.random() * 10000) + 1}
                      onChange={handleChange}
                      checked={
                        configSymptoms.filter(
                          (e) =>
                            e.category === symptom.category &&
                            e.sub_cat_cb_value === sub
                        ).length > 0
                      }
                    />
                    <li
                      key={Math.floor(Math.random() * 10000) + 1}
                      style={{ display: "inline" }}
                    >
                      <label style={{ display: "inline" }}>{sub}</label>
                      <br />
                    </li>
                  </span>
                ))}
              </ul>
            </span>
          </Card>
        ))}
      </span>
    </div>
  );
};

export default SymptomList;
