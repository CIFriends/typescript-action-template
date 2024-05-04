# GitHub Action Template

> [!NOTE] Docs:
> [docs.github.com](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

This repository contains a template for creating a GitHub Action using
TypeScript. It includes a set of workflows that automate the process of testing,
building, and checking the code.

## Action Details

The main entry point for the action is `src/index.ts`, which imports and runs
the `run` function from `src/main.ts`. This function retrieves an input named
"who-to-greet" and then sets an output named hello with the value "Hello,
<who-to-greet>!".

## Development

The code is written in TypeScript and transpiled to JavaScript for distribution.
The `tsconfig.json` file contains the TypeScript compiler options. The
`package.json` file contains various scripts for formatting, linting, testing,
and building the code. The `preinstall` script ensures that `pnpm` is used as
the package manager.

## Usage

To use this action in a workflow, you can reference it with the `uses` keyword
and the path to the repository. You can also specify inputs with the `with`
keyword. For example:

```yaml
steps:
  - name: Example Step
    uses: ./ # Uses an action in the root directory, if you push this repository to GitHub, you can use the following: uses: <username>/gh-action-template@v1
    with:
      who-to-greet: "Mona the Octocat"
```

This will run the action with the input `who-to-greet` set to "Mona the Octocat"

## Adding Inputs and Outputs

> [!NOTE] Docs:
> [docs.github.com](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

To add inputs and outputs to your GitHub Action, you need to define them in the
`action.yml` file. Inputs are defined under the `inputs` field and outputs under
the `outputs` field. Each input or output has a unique ID, a description, and
other optional properties. For example, an input could be defined as follows:

```yaml
inputs:
  my-input:
    description: "Description of the input"
    required: true
    default: "Default value"
```

And an output could be defined as follows:

```yaml
outputs:
  my-output:
    description: "Description of the output"
```

In your TypeScript code, you can use the `core.getInput` function from the
`@actions/core` package to retrieve the value of an input, and the
`core.setOutput` function to set the value of an output.

## Running the Action Locally

> [!TIP] If you don't want to install `act` on your environment, you can use
> GitHub Codespaces to run the action.

### Nektos/act

> [!NOTE] Docs: [nektos](https://nektosact.com/introduction.html);

Install [nektos/act](https://github.com/nektos/act) and run the following
command:

```bash
act push -W .github/workflows/ci.yml
```

## Workflows

There are several workflows defined in the `.github/workflows` directory:

- `ci.yml`: This workflow runs on every push or pull request to the `main`
  branch. It checks out the code, installs dependencies using `pnpm`, checks the
  code formatting, lints the code, runs tests, and then runs the action with a
  greeting.

- `check-dist.yml`: This workflow also runs on every push or pull request to the
  `main` branch. It checks out the code, installs dependencies, builds the
  `dist/` directory, and then checks if the `dist/` directory matches the
  expected output. If it doesn't, the workflow fails and uploads the expected
  `dist/` directory as a workflow artifact.

- `codeql-analysis.yml`: This workflow runs on every push or pull request to the
  `main` branch, as well as on a schedule. It checks out the code, initializes
  CodeQL with the TypeScript language, auto builds the code, and then performs a
  CodeQL analysis.

## Dependencies

The action uses the `@actions/core` and `@actions/github` packages as
dependencies. The `@actions/core` package provides functions for getting inputs
and setting outputs, among other things. The `@actions/github` package provides
GitHub-related functionality.

## License

This project is licensed under Apache-2.0. See the [LICENSE](LICENSE) file for
details.
