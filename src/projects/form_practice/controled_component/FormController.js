const FormController = {
  fnameController: (val, setState) =>
    setState((prevState) => {
      return { ...prevState, fname: val };
    }),
  lnameController: (val, setState) =>
    setState((prevState) => {
      return { ...prevState, lname: val };
    }),
  emailController: (val, setState) =>
    setState((prevState) => {
      return { ...prevState, email: val };
    }),
};

export default FormController;
