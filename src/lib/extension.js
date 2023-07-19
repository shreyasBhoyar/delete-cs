const contentstack = require("@contentstack/management");

const deleteExtensions = async (stackInfo) => {

    const client = contentstack.client();
  client
    .stack({ ...stackInfo })
    .extension()
    .query()
    .find()
    .then((extensions) => {
      for (let exts of extensions.items) {
        client
          .stack({ ...stackInfo })
          .extension(exts.uid)
          .delete()
          .then((response) => console.log(`info : Extension - ${exts.title} has been deleted successfully`));
      }
    });
};

module.exports = deleteExtensions;