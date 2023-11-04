

const Card = ()=>{
    const cardStyles = {
        borderRadius: "10px",
        border: "2px solid",
        borderColor: "#C49D9D",
        height: "160px",
        width: "336px",
        display: "flex",
        padding: "20px",
        background: "#f5f5f5",
        alignItems: "center"
    }

    const imgStyles = {
        width: "120px",
        height: "120px",
        borderRadius: "80px",
    }

    const textDivStyles = {
        paddingLeft: "20px"
    }

    return (
        <div style={cardStyles}>
            <img style={imgStyles} src="https://th.bing.com/th/id/OIP.0bJlSBwgMIj9_sWXanRgaAHaGj?pid=ImgDet&rs=1" alt="profile picture"/>
            <div style={textDivStyles}>
                <h2>King Charles</h2>
                <p>King Charles is the head of the family after his mother, Queen Elizabeth, died in 2023</p>
            </div>
        </div>
    )
}

export default Card;
