import { Publisher } from "./pub-sub";
export type ModelStatusT = "pending" | "available" | "failure";

export class MOdelStatus {
  private modelStatus: ModelStatusT = "pending";
  public publisher: Publisher;
  constructor(publisher: Publisher) {
    this.publisher = publisher;
  }
  setModelStatus(modelStatus: ModelStatusT) {
    this.modelStatus = modelStatus;
    this.publisher.updateSubscribers();
  }

  getModelStatus() {
    return this.modelStatus;
  }
}
