/**
 * State of all app with constants or somethig like that
 */
class State {
  /**
   * Current app version (string) with X.Y.Z format
   * @readonly it's constant!
   * @example 1.0.0
   */
  static readonly version = '1.0.0'
}

/**
 * Main store object for exporting
 */
const store = {
  state: State,
}

export default store
