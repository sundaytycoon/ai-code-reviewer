export enum InputKey {
  API_KEY = 'api-key',
}

export type ActionInput = {
  [key in InputKey]: string;
};
