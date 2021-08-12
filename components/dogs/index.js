import dogs from '../../data/dogs.json'
import Link from 'next/link';
const DogIndex = () => {
    return (
        <div className="dogs">
            {dogs.map(dog => <div key={dog.id}>
                <Link href={`/dogs/${dog.id}`}><a>
                    {dog.first_name}
                </a></Link>
            </div>)}
        </div>
    );
}

export default DogIndex;