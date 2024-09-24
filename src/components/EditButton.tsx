import React from "react";

interface EditButtonProps {
  name: string;
  link: string;
}

const EditButton: React.FC<EditButtonProps> = ({ name, link }) => {
  return (
    <a href={link} target="_blank" title={name} className="absolute top-0 right-0 bg-teal-500 p-5 border rounded-full">
      Edit
    </a>
  );
};

export { EditButton };
