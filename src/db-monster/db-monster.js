import {ENV} from './ENV';
import {Monitoring} from './monitor';

export class DbMonster {
  databases = []
  people = []

  activate() {
    let load;
    load = () => {
      this.databases = ENV.generateData().toArray();
      Monitoring.renderRate.ping();
      setTimeout(load, ENV.timeout);
    };
    load();
  }
}