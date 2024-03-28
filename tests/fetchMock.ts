export function createFetchMock(callback: (url: unknown) => any) {
  global.$fetch = callback;
}
export function clearFetchMock() {
  global.$fetch = null;
}
