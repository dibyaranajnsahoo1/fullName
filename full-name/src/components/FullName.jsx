import React, { useState } from "react";

const FullName = () => {
  const [fullname, setFullname] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.first.value;
    const lastName = form.last.value;

    if (firstName && lastName) {
      setFullname(`Full Name: ${firstName} ${lastName}`);
    }
  };

  return (
    <div>
        <h1>Full Name Display</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter your last name"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullname && <p>{fullname}</p>}
    </div>
  );
};

export default FullName;
