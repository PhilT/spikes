SOLID



SRP Single responsibility principle
  a class should have only a single responsibility

OCP Open-closed principle
  Extend but don't modify

LSP Liskov substitution principle
  objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program

ISP Interface segregation principle
  many client-specific interfaces are better than one general-purpose interface

DIP Dependency inversion principle
  Depend upon Abstractions. Do not depend upon concretions


JavaScript is

* Delegate prototypes
* runtime object extension
* closures


== Delegation / Differential inheritance

var proto = {
  hello: function hello() {
    return 'Hello, my name is ' + this.name;
  }
};

var george = Object.create(proto);

* Closure - data privacy

var a = stampit
