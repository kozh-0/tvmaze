/* import { Link } from "react-router-dom"

export default function Pagination({cardPerPage, total}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(total / cardPerPage); i++) {
        pageNumbers.push(i)
    }


    return <div>
        <ul className=""="pagination">
            {pageNumbers.map(num => (
                <li className="waves-effect" key={num}>
                    <Link>{num}</Link>
                </li>
            ))}
        </ul>
    </div>
} */


/*     const [cardPerPage] = useState(10)
    
// индексы первой и последней => определять текущую
    const lastPageIndex = currentPage * cardPerPage;
    const firstPageIndex = lastPageIndex - cardPerPage;
    const currentCards = data.slice(firstPageIndex, lastPageIndex) */


    /* <Pagination 
                cardPerPage={cardPerPage}
                total={data.length}
            /> */