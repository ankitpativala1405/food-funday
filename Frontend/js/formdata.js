import { TableMethod } from "../method/Table.method.js";

const GetValue = (id) => document.getElementById(id).value;

document
  .querySelector("#contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = GetValue("form_name");
    const email = GetValue("email");
    const phone = GetValue("phone");
    const Persons = GetValue("no_of_persons");
    const Date = GetValue("date-picker");
    const time = GetValue("time-picker");
    const preferred_food = GetValue("preferred_food");
    const occasion = GetValue("occasion");

    const Guest = {
      name: name,
      email: email,
      phone: phone,
      person: Persons,
      date: Date,
      time: time,
      food: preferred_food,
      occasion: occasion,
    };

    console.log(Guest);

    await (
      await TableMethod.create(Guest)
    ).json;
    alert("Signup successful!");
  });
