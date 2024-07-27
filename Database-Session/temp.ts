export type ModelStatusType = "pending" | "available" | "failure";

export class ModelStatus {
  private modelStatus: ModelStatusType = "pending";
  public publisher: Publisher;

  constructor(publisher: Publisher) {
    this.publisher = publisher;
  }

  setModelStatus(modelStatus: ModelStatusType) {
    this.modelStatus = modelStatus;
    this.publisher.updateSubscribers();
  }

  getModelStatus() {
    return this.modelStatus;
  }
}
