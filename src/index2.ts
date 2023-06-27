// type EventMap = {
//     [key: string]: (...args: any[]) => any;
//   };
  
//   type Listener<T extends keyof EventMap> = EventMap[T];
//   type ListenerRecord<T extends Extract<keyof EventMap, string>> = {
//     [K in T]: EventMap[K];
//   };
  
  
//   class EventEmitter<EventMap> {
//     private listeners: Partial<ListenerRecord<Extract<keyof EventMap, string>>> = {};
  
//     public addListener<T extends keyof Partial<ListenerRecord<Extract<keyof EventMap, string>>>>(event: T, listener: EventMap[T]): void {
//         this.listeners = {
//             ...this.listeners,
//             [event]: listener,
//           };
//     }
  
//     public emit<T extends keyof Partial<ListenerRecord<Extract<keyof EventMap, string>>>>(event: T, ...args: Parameters<Listener<T>>): void {
//         const listener = this.listeners[event];
//         if (listener) {
//           listener(...args);
//         }
//       }
//   }




//   interface MyEvents {
//     foo: (idk: number) => void ;
//     bar: (idk: string, flag: boolean) => void ;
//   }
  
//   const emitter = new EventEmitter<MyEvents>();
  
//   emitter.addListener('foo', (num: number) => {
//     console.log(`Received foo event with number: ${num}`);
//   });
  
//   emitter.addListener('bar', (str: string, flag: boolean) => {
//     console.log(`Received bar event with string: ${str} and flag: ${flag}`);
//   });
  
//   emitter.emit('foo', 42); // OK
// //   emitter.emit('bar', 'hello', true); // OK
  
// //   emitter.emit('foo', 'invalid'); // Compilation error: Argument of type 'string' is not assignable to parameter of type 'number'
// //   emitter.emit('bar', 'hello', 123); //