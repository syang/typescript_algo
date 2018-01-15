Instruction to contribute to one problem solver
-----------------------------------------------

## Goal of this README.md
Here we use the 'two_sum' problem as an example, and if you follow these steps, you should be able to build a problem solver (a sub directory in this project) and do a PR meeting the following requirements:

- a learner who has npm installed should be able to run your project with your **one liner** inside your directory
    - this means you should have npm packages dependency well described in  as module in your package.json
- a problem.md is need to clearly describe the problem
- a one paragraph README.md is highly encouraged
 
## Steps to build a problem solver

#### Prepare global packages (if you have not)
- (optional) install VSCode to streamline your development
    - [See more VSCode usage here](http://vscode-docs1.readthedocs.io/en/latest/editor/debugging/)
- `npm install typescript -g` # to make simple things like tsc --init
- `npm install -g ts-node` # TypeScript execution environment and REPL for node 
- `npm install -g tslint`  # make sure tslint command works
    - Install tslint plugin within VSCode

#### Make and go to your directory
- `mkdir two_sum`
- `cd two_sum`

#### Setup your package.json
- `npm init` and fill in the right input as you wish
    - add the test script to package.json
    ```
      "scripts": {
            "test": "./node_modules/.bin/mocha --require ts-node/register ./*.spec.ts"
        },
    ```
    - `npm install mocha @types/mocha --save-dev` # for testing code
    - `npm install chai --save-dev` # for testing code
    - `npm install  ts-node --save-dev` # for testing command
    - `npm install typescript --save-dev`

#### Setup your tsconfig.json
- `touch tsconfig.json`
- modify the tsconfig.json file in this two_sum project, something like the following:
```
{
    "version": "2.6.2",
    "compilerOptions": {
        "lib": ["es5", "es6", "dom"],
        "target": "es6",
        "module": "commonjs",
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "sourceMap": true
    },
    "exclude": [
        "node_modules"
    ]
}
```

#### setup your tslint.json

- `tslint -i`  # create a default tslint rule file, without which vscode won't be able to inspect within IDE

#### Coding and testing
- write your *.ts
- write your *.test.ts (or *.spec.ts)
- run tests `npm test`

#### Submit your PR




## References

- [Typescript Official Site](https://www.typescriptlang.org/)