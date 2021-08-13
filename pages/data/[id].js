export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = await data.map(user => {
        return {
            params: { id: user.id.toString() } // toString wichtig xD
        }
    })
    // console.log("P", paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { user: data }
    }
}


const DataItem = ({ user }) => {
    return (
        <div className="data">
            {user.name}
        </div>
    );
}



export default DataItem;