const _rand = () => Math.floor(Math.random() * 9999 + 1000);

const getUserObj = (fname = "", lname = "", email = "") => {
  return {
    id: _rand(),
    fname: fname,
    lname: lname,
    email: email,
  };
};

export default getUserObj;
