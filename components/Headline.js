const Headline = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
            <style jsx>{`
        h1 {
            color: ${props.color}
        }
        `}</style>
        </>

    );
}

export default Headline;