/*

Scoping and scope in javascript : concepts


Scoping: how our programs variables are organised and accessed where do variables live? or where can access a certain variable and where not ?

Lexical Scoping :- Scopping is controlled by placement of functions and blocks in the code;

Scope : Space or environment in which a certain variable is declared () there is global scope function scope and block scope 



scope of variable:-  Region of our code  where a certain variable can accessed.



Global Scope  :- outside of any function or block, variable declared in global scope are accessible everywhere.


Function Scope :-                

Block Scope 



Scope chain vs Call Stack  ??







Sumamry:- 
=========


* Scoping asks the question "Where do variable live ? " or where can we access a certain variable and where not ?

* There are three types of scope in javascript the global scope defined by functions and defined by blocks.

* Only let and const variables are blocked-scoped variable declared var end up in closest function scope.

* in javascript we have lexical scoping so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.

* every scope always has access to all the variables from all its outer scopes. this is the scope chain!


* when a variable is not in the current scope the engine looks up in the scope until it finds the variable it's looking for this is called variable lookup;

* the scope chain is one- way street a scope will never ever has to the variable of an inner scope.













*/