import * as core from "@actions/core";

/**
 * The main function for the action.
 * @returns {void} Resolves when the action is complete.
 */
export function run(): void {
  try {
    const who: string = core.getInput("who-to-greet");

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Greeting ${who}... at ${new Date().toTimeString()}`);

    // Set outputs for other workflow steps to use
    core.setOutput("message", `Hello, ${who}!`);
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
