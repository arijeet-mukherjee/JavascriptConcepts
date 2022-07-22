**#javascript Pipelines**

Do you know what pipelines are, do JS have pipeline operator❓

A pipeline allows easy function composition when performing multiple operations on a variable.
 
Hmm… confused right ?

Let's try to understand in this way. A Pipeline consists of a chain of processing elements, arranged so that the output of each element is the input of the next.

JavaScript lacks a Pipeline operator since it is an experimental feature and currently in stage 1 proposal, there is no support for currently available browsers and therefore is also not included in #node . However, one can use the Babel (JavaScript Compiler) to use it like :

Syntax:

```expression |> function```

But we can also accomplish this task using a design pattern.