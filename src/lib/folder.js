const contentstack = require("@contentstack/management");

const deleteFolders = async (stackInfo) => {
  const client = contentstack.client();
  client
    .stack({ ...stackInfo })
    .asset()
    .query({
      include_folders: true,
      query: { is_dir: true },
    })
    .find()
    .then((folders) => {
      for (let f of folders.items) {
        client
          .stack({...stackInfo})
          .asset()
          .folder(f.uid)
          .delete()
          .then((response) => console.log(`info : Folder - ${f.name} has been deleted successfully`));
      }
    });
};

module.exports = deleteFolders;