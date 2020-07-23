import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseDropCube')
export class BaseDropCube extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    private duartion :number = 0.5 
    private deltaTimeGone :number  = 0
    
    private dropEnbale : boolean = false
    onLoad () {
    }
    start () {

    }

    update (deltaTime: number) {
        if (!this.dropEnbale)
        {
            return;  
        }

        this.deltaTimeGone += deltaTime
        if(this.deltaTimeGone > this.duartion)
        {
            this.deltaTimeGone = 0
            //this.node.setPosition(this.node.getPosition().subtract(Vec3.UP) )          
            
        }
    }

    setDropEnable(enable: boolean){  
        if (enable === this.dropEnbale)
        {         
            return;
        }
        this.dropEnbale = enable
    }

    getDropEnable()
    {
        return this.dropEnbale
    }
}
