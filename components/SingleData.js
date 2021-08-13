import Link from 'next/link'

const SingleData = (props) => {
    return (<div>
        <div>
            <Link href={`/data/${props.ele.id}`}><a>Link</a></Link>
        </div>
    </div>);
}

export default SingleData;