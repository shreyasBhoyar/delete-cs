const contentstack = require("@contentstack/management");

const deleteWorflows = async (stackInfo) => {

  const client = contentstack.client();
  client
    .stack({ ...stackInfo })
    .workflow()
    .fetchAll()
    .then((workflows) => {
      for (let wfks of workflows.items) {
        client
          .stack({...stackInfo })
          .workflow(wfks.uid)
          .delete()
          .then((response) => console.log(`info : Workflow - ${wfks.name} has been deleted successfully`));
      }
    });
};

module.exports = deleteWorflows