import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./SymptomList.module.css";

let disorderCategories = [];

const header_titles = [
  "General",
  "Body Parts",
  "Stool related",
  "Brain and Mind Related",
];

const header_fields = [
  "general",
  "body-Parts",
  "stool-related",
  "brain-and-mind-related",
];

const SymptomList = ({ symptoms, onAdd }) => {
  const [disorderName, setDisorderName] = useState("");
  const [disorderNotes, setDisorderNotes] = useState("");
  const [disorderLinks, setDisorderLinks] = useState("");
  const [configSymptoms, setconfigSymptoms] = useState([]);

  const initconfigSymptons = () => {
    setconfigSymptoms([]);
    header_fields.forEach((v, idx) => {
      let tmpSymptoms = [];
      tmpSymptoms = symptoms[idx].categories.map((symptom) =>
        1 === 1
          ? {
              ...symptom,
              major_category: header_fields[idx],
              cat_cb_state: false,
              sub_cat_cb_value: "",
            }
          : symptom
      );
      console.log(`configSymptoms = ${configSymptoms.length}`);
      setconfigSymptoms((prevetmpSymptoms) => {
        return prevetmpSymptoms.concat(tmpSymptoms);
      });
    });
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
        setconfigSymptoms(
          configSymptoms?.map((e) =>
            e.category === name && e.sub_category.includes(value)
              ? {
                  ...e,
                  cat_cb_state: true,
                  sub_cat_cb_value: [...e.sub_cat_cb_value, value],
                }
              : e
          )
        );
      }
      // header_fields.forEach((v, index) => {
      //   configSymptoms[header_fields[index]].forEach((e) =>
      //     console.log(
      //       `name=${name} category=${e.category} state1=${e.cat_cb_state} state=${e.sub_cat_cb_value} sub_category=${e.sub_category} value=${value}`
      //     )
      //   );
      // });
      console.log(`${name} is ${value} is ${checked}`);
    } else {
      if (name === "symptoms") {
        setconfigSymptoms(
          configSymptoms.map((e) =>
            e.category === value
              ? { ...e, cat_cb_state: "false", sub_cat_cb_value: "" }
              : e
          )
        );
      } else {
        setconfigSymptoms(
          configSymptoms.map((e) =>
            e.category === name && e.sub_category.includes(value)
              ? {
                  ...e,
                  cat_cb_state: true,
                  sub_cat_cb_value: e.sub_cat_cb_value?.filter(
                    (e) => !e.includes(value)
                  ),
                }
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
      console.log(
        `selectedSymptoms = ${e.major_category} ${e.category} ${e.cat_cb_state} ${e.sub_cat_cb_value}`
      );
      disorderCategories = [
        ...disorderCategories,
        {
          major_category: e.major_category,
          category: e.category,
          sub_category: e.sub_cat_cb_value,
        },
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

    onAdd({ disorderCategories, disorderName, disorderNotes, disorderLinks });

    setDisorderName("");
    setDisorderNotes("");
    setDisorderLinks("");
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
            placeholder="Add Disorder"
            value={disorderName}
            onChange={(e) => setDisorderName(e.target.value)}
          />
          <label>Notes</label>
          <textarea
            placeholder="Disorder Notes"
            rows="3"
            cols="50"
            value={disorderNotes}
            onChange={(e) => setDisorderNotes(e.target.value)}
          />
          <label>Links</label>
          <textarea
            placeholder="Link Name and link, separate by ;"
            rows="3"
            cols="50"
            value={disorderLinks}
            onChange={(e) => setDisorderLinks(e.target.value)}
          />
          <input
            type="submit"
            value="Save Disorder"
            className="btn btn-block"
          />
        </div>
      </form>
      <span>
        {header_fields.map((v, idx) => (
          <React.Fragment key={Math.floor(Math.random() * 100000) + 1}>
            <h4>
              {v}-{idx}
            </h4>
            <br />
            <span className={classes.symptoms}>
              {symptoms[idx].categories.map((symptom) => (
                <Card key={Math.floor(Math.random() * 100000) + 1}>
                  <span>
                    <h3>
                      <input
                        type="checkbox"
                        name="symptoms"
                        value={symptom.category}
                        id={`${idx}-${symptom.category}`}
                        onChange={handleChange}
                        checked={
                          configSymptoms.filter(
                            (e) =>
                              e.major_category === header_fields[idx] &&
                              e.category === symptom.category &&
                              e.cat_cb_state === true
                          ).length > 0
                        }
                      />
                      &nbsp;
                      <label htmlFor="flexCheckDefault">
                        {symptom.category}
                      </label>
                    </h3>
                    <ul>
                      {symptom.sub_category.map((sub, index) => (
                        <span
                          style={{ display: "inline" }}
                          key={Math.floor(Math.random() * 100000) + 1}
                        >
                          <input
                            style={{ display: "inline" }}
                            type="checkbox"
                            name={symptom.category}
                            value={sub}
                            id={`${idx}-${symptom.category}-${sub}`}
                            onChange={handleChange}
                            checked={
                              configSymptoms.filter(
                                (e) =>
                                  e.major_category === header_fields[idx] &&
                                  e.category === symptom.category &&
                                  e.sub_cat_cb_value?.includes(sub)
                              ).length > 0
                            }
                          />
                          <li
                            key={Math.floor(Math.random() * 100000) + 1}
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
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};

export default SymptomList;
