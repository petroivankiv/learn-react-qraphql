export function getAll(Topic) {
  return function (req, res, next) {
    Topic.getAll()
      .then((customer) => {
        res.json(customer);
      })
      .catch((e) => next(e));
  };
}

export function create(Topic) {
  return function (req, res, next) {
    const topic = new Topic(req.body);

    topic
      .save()
      .then((topic) => {
        res.json(topic);
      })
      .catch((e) => next(e));
  };
}

export function remove(Topic) {
  return function (req, res, next) {
    Topic.remove(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((e) => next(e));
  };
}
