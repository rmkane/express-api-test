class Task {
  constructor(config) {
    this.name = config.name;
    this.status = config.status;
    this.created_at = config.created_at || new Date();
  }
}

module.exports = Task;