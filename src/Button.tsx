import './index.css';

type Props = {
    color?:string
    radius?:number
}
const Button = ({color, radius}:Props)=> {
    const styles = {
        backgroundColor : color || "#C49D9D",
        borderRadius: radius? radius+"px": "60px",
        height: "40px",
        width: "120px",
        color: "#F5F5F5",
        border : "none",
    }
    
    return (
        <>
            <button className="button" style = {styles}>click me</button>
        </>
    )

}

export default Button;