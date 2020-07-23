import { _decorator, Component, Node, Vec2, Prefab, instantiate, Vec3, CCFloat, CCInteger, CCBoolean } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FloorLayer')
export class FloorLayer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({type: CCInteger})
    public floor_width = 10;

    @property({type: CCBoolean})
    public is_Square = false;

    @property({type: Vec3})
    public floor_pos : Vec3 = new cc.Vec3();

    @property({type: Prefab})
    public floorCube : Prefab = null;

    private ListItem = []

    onLoad () {
        // Your initialization goes here.

        this.generateFloor();
    }

    generateFloor(){
        this.ListItem = []

        const floor0 = instantiate(this.floorCube)
        let scale = floor0.getScale()
        let origin;
        let half = Math.floor(this.floor_width / 2)
        let odd = this.floor_width % 2
        if (odd == 0)
        {
            origin = new cc.Vec3(this.floor_pos.x - half * scale.x + scale.x * 0.5, 0, this.floor_pos.z - half * scale.z + scale.z * 0.5)
        }else{
            origin = new cc.Vec3(this.floor_pos.x - half * scale.x , 0, this.floor_pos.z - half * scale.z)
        }

        for (let i = 0; i < this.floor_width; ++i)
        {
            for (let j = 0; j < this.floor_width; ++j)
            {
                const floor = instantiate(this.floorCube)
                floor.parent = this.node
                const scale = floor.getScale()

                const pos = new cc.Vec3(origin.x + i * scale.x, 0, origin.z + j * scale.z)
                floor.setPosition(pos)

                this.ListItem.push(floor)
            }
        }        

       console.log(1111,this.ListItem)
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    getItemList(){
        return this.ListItem
    }
}
