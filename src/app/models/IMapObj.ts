interface IMapObj {
    id: string,
    description: string,
    imageSrc: string,
    location: { x: number; y: number; z: number },
    isShow: boolean,
  }
  export default IMapObj