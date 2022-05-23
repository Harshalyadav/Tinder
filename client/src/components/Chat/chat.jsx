
import React from "react";

const Chat = ({descendingOrderMessages})=>{
    return (
        <>
        <div>
            {descendingOrderMessages.map((message ,_index)=>(
                <div key={_index}>
                    <div>
                        <div>
                            <img 
                              src={message.img}
                              alt={message.name + ' profile'}
                            />
                        </div>
                        <p>{message.name}</p>
                    </div>
                    <p>{message.message}</p>
                </div>
                    
                    )) }
        </div>
        </>
    )
}

export default Chat ;