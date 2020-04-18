module.exports = (model) => {
  return {
    getAllTopics() {
      return model.getAll();
    },

    create(topic) {
      const topicModel = new model(topic);

      return topicModel.save().then((topic) => topic);
    },

    remove({ id }) {
      return model.remove(id).then(() => {
        return { id };
      });
    },
  };
};
