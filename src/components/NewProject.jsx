import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enterdDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enterdDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-gray-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-gray-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-gray-600 mb-4">
          Please make sure you provide a valid value for every input fieled.
        </p>
      </Modal>
      <div className="w-[35rem] pt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-gray-800 hover:text-gray-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <Input type="text" label="Title" ref={title} />

        <Input
          type="description"
          label="Description"
          ref={description}
          textarea
        />

        <Input type="date" label="Due  Date" ref={dueDate} />
      </div>
    </>
  );
}
