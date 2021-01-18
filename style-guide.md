# Component Structure - Atomic Design
### Simple things make firm foundations

The application is structured based on Atomic Design. The five levels from smallest to biggest are Atoms, Molecules, Organism, Templates, and pages. Strive to make components as small as possible and reusable. Check to see if a component already exists that you can use before creating a new one.
Read this article to learn about Atomic Design [Atomic Web Design] (https://bradfrost.com/blog/post/atomic-web-design/).

-All components should be functional using the template file "FunctionalComponent.js" (src/components/Templates/FunctionalComponent.js)

# Component Naming

- All component names must start with a capital letter
- All words within a component name should start with a capital letter
- The name should tell you what the component does
- Component names should be singular and a noun.
- Use more than one word to name Organisms, Templates, and pages. This will ensure your component name is precise. 


# Variable Naming

- Use camel case naming convention.
- Use more than one word to name your variable. This will ensure your variable name is precise.
- Booleans should have a prefix like is, are, or has. Example var isVisible = true;


# Function Naming

- Make all function names verbs and describe what the function does.
- Use the camel case naming convention.
- UseState function that sets the state must have a prefix of “set”. Redux actions also use the "set" prefix. example setOptionsMenuElements.
- Function names should not have a prefix of “set” unless it's part of a useState hook or Redux.


# Vertical whitespace

A single blank line appears:

1. Between consecutive methods in a class or object literal
	1. Exception: A blank line between two consecutive properties definitions in an object literal (with no other code between them) is optional. Such blank lines are used as needed to create logical groupings of fields.
2. Within method bodies, sparingly to create logical groupings of statements. Blank lines at the start or end of a function body are not allowed.


# Horizontal whitespace

Beyond where required by the language or other style rules, and comments, a single space also appears in the following places only.

1. Separating any reserved word (such as if, for, or catch) except for function and super, from an open parenthesis (() that follows it on that line.
2. Separating any reserved word (such as else or catch) from a closing curly brace (}) that precedes it on that line.
3. Before any open curly brace ({), with one exceptions:
		1. Before an object literal that is the first argument of a function or the first element in an array literal (e.g. foo({a: [{c: d}]})).
4. After a comma (,) or semicolon (;). Note that spaces are never allowed before these characters.
5. After the colon (:) in an object literal.
6. On both sides of the double slash (//) that begins an end-of-line comment. Here, multiple spaces are allowed, but not required.


# Comment Format

The basic formatting of comment blocks is as seen in this example:
```
/**
 * Multiple lines of comment text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 */
function doSomething(arg) { … }
```
or in this single-line example:
```
/** @const @private {!Foo} A short bit of JSDoc. */
this.foo_ = foo;
```
If a single-line comment overflows into multiple lines, it must use the multi-line style with /** and */ on their own lines.


# misc

- Indent using tabs(4 spaces)
- Nested elements must be indented
- Semicolons are required
- Use Let and Const for variables and not Var
- Css classnames Use Camel Case naming convention
- All functions must be declared in es6 



Some of the guidelines were pulled from
 [Google Javascript Style Sheet] (https://google.github.io/styleguide/jsguide.html#formatting) 
