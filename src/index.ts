import { ActionInput, InputKey } from './model/inputKey';
import { getInput } from '@actions/core';

function getInputValue(): ActionInput {
  const returnValue: ActionInput = { 'api-key': '' };

  for (const key of Object.keys(InputKey)) {
    returnValue[key as InputKey] = getInput(key.valueOf());
  }

  return returnValue;
}

async function run() {
  const inputValue = getInputValue();
  console.log(inputValue);
}

run();
