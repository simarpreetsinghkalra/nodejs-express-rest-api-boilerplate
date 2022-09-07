const getUsers = (req, res) => {
  res.send({
    status: 200,
    message: "list of users fetched",
    data: [],
  });
};

const getUserByEmail = (req, res) => {

  res.send({
    status: 200,
    message: "Get user by email",
    data: [],
  });
};

const getUserById = (req, res) => {
  res.send({
    status: 200,
    message: "user by Id",
    data: [],
  });
};


const getUser = {
    getUserByEmail,
    getUserById,
    getUsers
};

export default getUser; 