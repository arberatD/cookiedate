export default function Footer(props) {
    return (
        <footer style={{textAlign: 'center',
        padding: "1rem",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        color: props.textColor,
        backgroundColor: props.bgColor
        }}><p> &copy; 2023 Abi´s Webseite</p>
        </footer>
    )
}