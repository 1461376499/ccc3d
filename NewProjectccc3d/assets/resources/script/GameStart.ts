import { _decorator, Component, Node, Prefab, CCInteger, loader, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStart')
export class GameStart extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        this.loadMainView()
    }

    loadMainView()
    {
        loader.loadRes("prefab/layer/MainView", Prefab, (err, prefab)=>{
            const mainview = instantiate(prefab)
            mainview.parent = this.node
        })
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
