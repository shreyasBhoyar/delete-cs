const contentstack = require("@contentstack/management");

const deleteGBFs = async (stackInfo) => {
  await removeGlobalFieldFromCT(stackInfo)
    const client = contentstack.client();
    await client
    .stack({...stackInfo})
    .globalField()
    .query()
    .find()
    .then(async(globalFields) => {
      for (let gbfs of globalFields.items) {
        await client
          .stack({
           ...stackInfo
          })
          .globalField(gbfs.uid)
          .fetch()
          .then((globalField) => {
            let newSchema = globalField.schema.filter(
              (sc) => sc.field_metadata?._default === true
            );
            let dummySchema = [
                {
                  "data_type": "text",
                  "display_name": "Title",
                  "field_metadata": { "_default": true, "version": 3 },
                  "mandatory": true,
                  "uid": "title",
                  "unique": true,
                  "multiple": false,
                  "non_localizable": false
                }
              ]
            globalField.schema = newSchema.length>0?newSchema:dummySchema;
            return globalField.update();
          })
          .then((gbf) => {
            // console.log(globalFields.map())
            client
              .stack({
                ...stackInfo,
              })
              .globalField(gbf.uid)
              .delete()
              .then((response) => console.log(`info : Global Field - ${gbf.title} has been deleted successfully`));
          });
      }
    });


}

const removeGlobalFieldFromCT = async(stackInfo)=>{
  const client = contentstack.client();
  return client
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
            let newSchema = []
            let oldSchema = contentType.schema;
            let global_fields = contentType.schema.filter(
              (sc) => sc.data_type === "global_field"
            );
            for(let i=0;i<oldSchema.length;i++){
              if(!global_fields.includes(oldSchema[i])){
                newSchema.push(oldSchema[i])
              }
            }
            contentType.schema = newSchema;

            return contentType.update();
          })
}

    })
  }
module.exports = deleteGBFs