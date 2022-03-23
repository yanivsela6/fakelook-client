import IComment from "./IComment";
import ILike from "./ILike";
import ITag from "./ITag";

interface IPost{
    id:number,
    description:string,
    imageSorce:string,
    x_Position:number,
    y_Position:number,
    z_Position:number,
    date:Date,
    userId:number,
    tags:ITag[],
    likes:ILike[],
    comments:IComment[],

}
export default IPost; 