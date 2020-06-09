import React from "react";
import { DEFAULT_VALUE } from "../../constants";

const Contact = ({
  email = DEFAULT_VALUE,
  name = DEFAULT_VALUE,
  phone = DEFAULT_VALUE
}) => (
  <tr>
    <td>{name}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>
      <span aria-label="edit" role="img">
        🖋️
      </span>
    </td>
    <td>
      <span aria-label="delete" role="img">
        ❌
      </span>
    </td>
  </tr>
);

export default Contact;
