// export const signup = (req, res) => {
//   res.send("Signing Up");
//   console.log("signup");
// };

export const signup = async (req, res) => {
  try {
    const { fullName, username , password, confirmPassword , gender} = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login user");
  console.log("logging in");
};

export const logout = (req, res) => {
  res.send("logging Out");
  console.log("logout");
};
