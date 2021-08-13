import SingleData from '../components/singleData';

const Data = ({ data }) => {
    // console.log(data)
    return (
        <div className="data">
            {data.map((ele, i) => i < 10 ? <SingleData key={ele.id} ele={ele} />
                : ""
            )}
        </div>
    );
}

export default Data;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json()

    return {
        props: { data }
    }
}