export interface Subscriber {
  update: (publisher: Publisher) => void;
}

export interface Publisher {
  subscribers: Subscriber[];
  subscribe: (subscriber: Subscriber) => void;
  unsubscribe: (subscriber: Subscriber) => void;
  updateSubscribers: () => void;
}

export class ActualPublisher implements Publisher {
  public subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers.push(subscriber);
    }
  }
  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  updateSubscribers() {
    this.subscribers.forEach((subscriber) => subscriber.update(this));
  }
}
