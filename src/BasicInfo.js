import React from "react";

export default function BasicInfo(person) {
    return (
        <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.number}</li>
      </ul>
    )
}