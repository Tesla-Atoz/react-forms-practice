import { ReactForm } from "react-forms";
import React from "react";

const MyReactComponent = () => {
  const detail = {
    enteredName: "hellop",
    enteredAge: "assds",
  };

  function onChangeHandler() {
    console.log("hello");
  }
  const myConfig = [
    {
      type: "text",
      valueKey: "myTextField",
      fieldProps: {
        label: "Name",
        fullWidth: true,
        value: detail.enteredName,
        onChange: onChangeHandler,
      },
    },
    {
      type: "text",
      valueKey: "myTextField2",
      fieldProps: {
        label: "age",
        fullWidth: true,
        value: detail.enteredAge,
      },
    },
  ];

  const onSubmitHandler = (values: any) => {
    console.log("form-data", values);
  };
  const myInitialValues = [
    {
      myTextField: "hello",
      myTextField2: "asdsa",
    },
  ];
  const weg = 1;
  const me = 2;

  return (
    <ReactForm
      config={myConfig}
      initialValues={myInitialValues}
      formId="1"
      actionConfig={{
        submitButtonText: weg && me ? "update" : "add",
        submitButtonProps: { variant: "outlined" },
      }}
      isInProgress={true}
      onSubmit={onSubmitHandler}
    />
  );
};
export default MyReactComponent;
