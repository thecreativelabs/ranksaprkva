export default function Cards(props){
    return(
        <div
        className={`${props.className} h-[256px] rounded flex justify-center relative items-center bg-cover`}
        style={{
            backgroundImage: `url(${'./methods/Vector-3.png'})`,
            backgroundColor: props.color
        }}>
        <img src={props.image} className="max-h-[100px] " />
        <img
            src={props.logo}
            className="absolute h-[100px] top-[-35px] right-[-20px]"
        />

    </div>
    )
}