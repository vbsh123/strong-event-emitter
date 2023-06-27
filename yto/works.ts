type EventMap = {
    [key: string]: (...args: any[]) => void;
  };
  
  type ListenerRecord<T extends keyof EventMap> = {
    [K in T]: EventMap[K];
  };
  
  class EventEmitter<EventMap> {
    private listeners: Partial<ListenerRecord<Extract<keyof EventMap, string>>> = {};
  
    public addListener<T extends keyof EventMap>(
      event: T,
      listener: EventMap[T]
    ): void {
        //@ts-ignore
      this.listeners[event] = listener;
    }
  
    //@ts-ignore
    public emit<T extends keyof EventMap>(event: T, ...args: Parameters<EventMap[T]>): void {
    //@ts-ignore
    const listener = this.listeners[event as keyof EventMap];
      if (listener) {
        listener(...args);
      }
    }
  }
  
  interface MyEvents {
    foo: (idk: number) => void;
    bar: (str: string, flag: boolean) => void;
  }
  
  const emitter = new EventEmitter<MyEvents>();
  
  emitter.addListener('foo', (num: number): number=> {
    console.log(`Received foo event with number: ${num}`);
    return 5;
  });
  
  emitter.addListener('bar', (str: string, flag: boolean) => {
    console.log(`Received bar event with string: ${str} and flag: ${flag}`);
  });
  
  emitter.emit('foo', 43,); // Output: Received foo event with number: 42
  
  emitter.emit('bar', 'hello', true); // Output: Received bar event with string: hello and flag: true
  