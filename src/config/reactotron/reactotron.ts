// import { onSnapshot } from 'mobx-state-tree';
// import { mst } from 'reactotron-mst';
import Tron, { trackGlobalErrors } from 'reactotron-react-native';
// import { RootStoreType } from '../../models';

type BaseTron = typeof Tron;

interface ReactotronWithPlugins extends BaseTron {
  trackMstNode: (mstNode: any, name?: string) => any;
  storybookSwitcher: (storybook: any) => any;
}

interface NoopTron {
  configure: () => void;
  connect: () => void;
  use: () => void;
  useReactNative: () => void;
  clear: () => void;
  log: () => void;
  logImportant: () => void;
  display: (params: object) => void;
  error: () => void;
  image: () => void;
  reportError: () => void;
  trackMstNode: () => void;
  storybookSwitcher: (storybook: any) => void;
}

declare global {
  interface Console {
    tron: ReactotronWithPlugins | NoopTron;
  }
}

const noop = (params?: any) => undefined;

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (__DEV__) {
  // tslint:disable-next-line
  console.tron = Tron as ReactotronWithPlugins;
} else {
  // tslint:disable-next-line
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    image: noop,
    reportError: noop,
    trackMstNode: noop,
  };
}

class Reactotron {
  // private rootStore: RootStoreType | null = null;

  // sets root store for MobX
  public setRootStore(rootStore: any, initialData: any) {
    if (__DEV__) {
      // this.rootStore = rootStore as RootStoreType;
      const name = 'ROOT STORE';

      Tron.display({
        name,
        value: initialData,
        preview: 'Initial State',
      });

      // onSnapshot(rootStore, snapshot => {
      //   Tron.display({ name, value: snapshot, preview: 'New State' });
      // });

      // tslint:disable-next-line
      // (console.tron as ReactotronWithPlugins).trackMstNode(rootStore);
    }
  }

  public async setup() {
    if (__DEV__) {
      Tron.configure({
        name: require('../../../package.json').name,
        host: 'localhost',
      });

      // hookup middleware
      Tron.useReactNative();

      // MST setup
      // const RX = /postProcessSnapshot|@APPLY_SNAPSHOT/;

      // Tron.use(
      //   mst({
      //     // filter: event => RX.test(event.name) === false,
      //   }),
      // ).use(trackGlobalErrors());

      Tron.connect();
      Tron.clear();
    }
  }
}

export const reactotron = new Reactotron();
reactotron.setup();
