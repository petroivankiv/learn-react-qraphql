import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    rate: { type: Number, required: false },
  },
  { timestamps: true }
);

topicSchema.statics = {
  getAll() {
    return this.find({}).exec();
  },

  getSome(obj) {
    return this.find(obj).exec();
  },

  getOne(id) {
    return this.findById(id).exec();
  },

  update(id, topic) {
    return this.findByIdAndUpdate(id, { $set: topic }, { new: true }).exec();
  },

  remove(id) {
    return this.deleteOne({ _id: id })
      .exec()
      .then(() => id);
  },
};

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
