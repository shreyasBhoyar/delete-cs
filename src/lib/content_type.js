const contentstack = require("@contentstack/management");

const deleteCTs = async (stackInfo) => {
  const client = contentstack.client();
  client
    .stack({
      ...stackInfo
    })
    .contentType()
    .query()
    .find()
    .then((parentContentType) => {
      for (let content_type_uid of parentContentType.items) {
        client
          .stack({
            ...stackInfo
          })
          .contentType(content_type_uid.uid)
          .fetch()
          .then((contentType) => {
            let newSchema = contentType.schema.filter(
              (sc) => sc.field_metadata?._default === true
            );

            contentType.schema = newSchema;

            return contentType.update();
          })
          .then((ct) => {
            client
              .stack({
                ...stackInfo,
              })
              .contentType(ct.uid)
              .delete()
              .then((response) => console.log(`info : Content Type - ${ct.title} has been deleted successfully`));
          });
      }
    });
};

module.exports = deleteCTs;
