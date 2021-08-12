// Wenn nötig noch eine index.js erstellen
import { useRouter } from 'next/router'
import dogs from '../../data/dogs.json'
import Link from 'next/link';

const Dogs = () => {
    const router = useRouter()
    console.log(router)
    const { id } = router.query
    const thisDog = dogs.filter(dog => dog.id == id)[0]
    return (
        <div>
            <Link href="/dogs/"><a>Go back</a></Link>
            <h1>{thisDog.first_name}</h1>
        </div>
    );
}

export default Dogs;