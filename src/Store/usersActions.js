export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          let users = [];

          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            payload: users,
          });
        },
        (err) => {}
      );
  };
};
