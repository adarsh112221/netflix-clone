import React,{useState,useContext,createContext} from 'react'
import {Container,Frame,Title,Item,Inner,Header,Body} from './styles/accordian'
const ToggleContext=createContext();
export default function Accordian({children,...restProps})
{
    return(
        <Container>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
}
Accordian.Title=function AccordianTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordian.Frame=function AccordianFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}
Accordian.Item=function AccordianItem({children,...restProps}){
    const[toggleShow,setToggleShow]=useState(false);
    return <ToggleContext.Provider value={{toggleShow,setToggleShow}}><Item {...restProps}>{children}</Item></ToggleContext.Provider>;
}
Accordian.Header=function AccordianHeader({children,...restProps}){
    const{toggleShow,setToggleShow}=useContext(ToggleContext);
    return <Header onClick={()=>setToggleShow((toggleShow)=>!toggleShow) } {...restProps}>{children}
    {toggleShow?(<img src="/images/icons/close-slim.png" alt="open"/>):(<img src="/images/icons/add.png" alt="close"/>)}
    </Header>
}
Accordian.Body=function AccordianBody({children,...restProps}){
    const{toggleShow}=useContext(ToggleContext)
    return toggleShow?<Body {...restProps}>{children}</Body>:null;
}
