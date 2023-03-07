import Nelson, {INelson} from "./Nelson";

interface INelsonListProps {
    products: INelson[]
}

const NelsonList = (props: INelsonListProps) => {
    return (
        <div className="product-list">
            {props.nelsons.map((nelson, index) => <Nelson nelson={nelson} key={index}/>)}
        </div>
    )
}


export default NelsonList