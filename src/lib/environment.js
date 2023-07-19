const contentstack = require("@contentstack/management");

const deleteEnvs = async (stackInfo) => {
  const client = contentstack.client();
  client
    .stack({ ...stackInfo })
    .environment()
    .query()
    .find()
    .then((environments) => {
      for (let envs of environments.items) {
        console.log(envs.uid)
        // client
        //   .stack({ ...stackInfo })
        //   .environment(envs.uid)
        //   .delete()
        //   .then((response) =>
        //     console.log(
        //       `info : Environment - ${envs.name} has been deleted successfully`
        //     )
        //   );
      }
    });
};

module.exports = deleteEnvs;


// bltc435c0616fac5eef