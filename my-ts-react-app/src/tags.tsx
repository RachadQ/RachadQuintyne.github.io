import Tag from "./types/tag.interface"

const tagComponent: React.FC<Tag> = ({ info }) => {
    
    return(

        <div className="tag">
        {info.name}
        </div>

    );
    }

export default tagComponent;