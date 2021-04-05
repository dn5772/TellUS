import React from 'react';
import { BrowserRouterProps, Link } from 'react-router-dom';

interface Props {
    props: BrowserRouterProps
};

const CompletePage:React.FC<any> = (props) => {
    return (
        <div className="BackGround">
            
            <form>
                <div className = "TopHeader"> 
                    <p className = "TellUs">TellUs</p>
                </div>
                <div className = "Ground">

                <p className = "FloorTxt">Floor</p> 

                <p className = "TerraceTxt">Terrace</p>

                <Link to = '/'>
                    <button className = "Return">
                        <p className = "ReturnTxt"> return 0;</p> 
                        
                    </button>
                </Link>

                <Link to='/'>
                    <button className = "CancelBut"> 
                        <p className = "CancelTxt"> Cancel </p>
                    </button>
                </Link>

                </div>

            </form>
        </div>
    );
};

export default CompletePage;