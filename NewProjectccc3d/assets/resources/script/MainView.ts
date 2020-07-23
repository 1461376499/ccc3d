import { _decorator, Component, Node, loader, Prefab, instantiate, Vec3, Script, CCObject } from 'cc';
const { ccclass, property } = _decorator;

import{BaseDropCube} from './BaseDropCube'
import { FloorLayer } from './FloorLayer';

@ccclass('MainView')
export class MainView extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({type:Prefab})
    public dropItem :Prefab[] = [];


    private _ceilling = null
    private _ceillList :Node[] = []

    private _floor = null
    private _floorList :Node[] = []

    private Duration = 3
    private TimeGone  = 0

    start () {
        // Your initialization goes here.

        this.loadFloor()
        this.loadCeiling()
    }

    loadFloor(){
        loader.loadRes("prefab/layer/Floor", Prefab, (err, prefab)=>{
            const floor = instantiate(prefab)
            floor.parent = this.node
            this._floor = floor

            this._floorList = floor.getComponent(FloorLayer). getItemList()
        })
    }

    loadCeiling(){
        let self = this
        loader.loadRes("prefab/layer/Ceilling", Prefab, (err, prefab)=>{
            const ceilling = instantiate(prefab)
            ceilling.parent = self.node
            ceilling.setPosition(new Vec3(0,15,0))
            

            self._ceilling = ceilling

            self._ceillList = ceilling.getComponent(FloorLayer).getItemList()
 
        })
    }


    update (deltaTime: number) {
        // Your update function goes here.


        this.TimeGone += deltaTime
        if (this.TimeGone > this.Duration)
        {          
            this.TimeGone = 0
            this.generateDrop()
        }
    }

    generateDrop()
    {
        const randType = Math.floor(Math.random() * 100 % this.dropItem.length)
        let drop = instantiate(this.dropItem[randType])
        drop.parent = this._ceilling
        let dropScript = drop.getComponent(BaseDropCube)
        dropScript.setDropEnable(true)

        const randCeil = Math.floor(Math.random() * 1000 % this._ceillList.length)
        console.log(randType)
        let ceil : Node = this._ceillList[randCeil]
        drop.setPosition(ceil.getPosition().subtract(Vec3.UP))
    }
}
