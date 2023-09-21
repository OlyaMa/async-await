import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    const readed = await read();
    return new GameSaving(JSON.parse(await json(readed)));
  }
}
