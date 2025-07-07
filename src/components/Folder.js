import { useState } from "react";

function Folder({explorer}) {

      const [expand, setExpand] = useState(false);
const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
});

const handleNewFolder = (e, isFolder) => {
e.stopPropagation();
setExpand(true);
setShowInput({
    visible: true,
    isFolder: isFolder
})
}
    if(explorer.isFolder)
    return <div style={{marginTop: 5}}>
        <div className="folder" onClick={() => setExpand(!expand)}>
            <span>{explorer.name}</span>

            <div>
                <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
            </div>

            <div style={{display: expand ? "block" : "none", paddingLeft: "25px"}}>
                {
                    showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder? "Enter folder name" : "Enter file name"}</span>
                            <input 
                            type="text"
                            autoFocus
                            onBlur={() => setShowInput({...showInput, visible: false})}
                            className="inputContainer_input"/>
                        </div>
                    )
                }
                {explorer.items.map((exp) =>{
                return(
                    <Folder explorer={exp}
                    key={exp.id} />
                )})}
            </div>
    </div>
    else{
        return <span className="file">{explorer.name}</span>
    }
}
export default Folder;