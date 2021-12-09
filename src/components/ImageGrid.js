import React from "react";
import useFirestore from "../hooks/useFirestore";
import { auth } from "../firebase/config";

const ImageGrid = () => {
    const { docs } = useFirestore(auth.currentUser.uid)
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt='uploaded pic'></img>
                </div>
            ))}
        </div>
    )
}
export default ImageGrid;
