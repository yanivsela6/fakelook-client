import ILike from "./ILike";
import ITag from "./ITag";

interface IMapObj {
    id: string,
    description: string,
    imageSrc: string,
    location: { x: number; y: number; z: number },
    isShow: boolean,
    likes:ILike[]
    date:Date,
    userId:number,
    tags:ITag[],
  }
  export default IMapObj