import { Emitter } from 'strict-event-emitter'
import { Type } from 'typescript';


console.log('hey we got nuting');

type Events = {
    ping: [number]
  }

const emitter = new Emitter<Events>()
emitter.addListener('ping', (n) => {
  // "n" argument type is inferred as "number'.
})


class EventEmitter {
    emitters = new Map<string, Emitter<any>>();
    types = new Map<string, Type>();
    constructor() {

    }

    addListener(something: string, callback: Function, type: Type) {
        const emitter = new Emitter<Events>();
        this.emitters.set(something, emitter)
    }

    emit(something: string, ...args: typeof this.types[something]) {

    }

    
}

const emitter2 = new Emitter<Events>()

emitter.on('ping', (n) => {

})

