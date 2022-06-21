import { useState } from "react"
import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    padding: 20px;
    background-color: beige;
`

const MainImg = styled.div`
    width: 500px;
    height: 300px;
    margin: 20px 0;
    background: url(${props => props.imgSelect}) no-repeat center / cover;
`

const Desc = styled.h3`
    font-size: 20px;
    margin: 10px 0;
    border: 1px solid bisque;
`

const SubImgWrap = styled.div`
    width: 60%;
    display:flex;
    justify-content: space-between;
`

const SubImg = styled.div`
    width: 18%;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        width: 130%;
    }
    &:hover img{
        width: 150%;
    }
`

export const ImgSelect = () => {
    const [img, setImg] = useState("https://www.icegif.com/wp-content/uploads/2022/02/icegif-911.gif")
    const [desc, setDesc] = useState("Grogu eating egg")

    const handle1 = () => {setImg("https://www.icegif.com/wp-content/uploads/2022/02/icegif-911.gif")}
    const handle2 = () => {setImg("https://i.pinimg.com/originals/e5/3a/3a/e53a3a286bc7b823bb9ac51bc3b716cb.gif")}
    const handle3 = () => {setImg("https://c.tenor.com/hYXKVyDSGCIAAAAC/baby-yoda-soup.gif")}
    const handle4 = () => {setImg("https://c.tenor.com/o7VKbCv_EJwAAAAC/baby-yoda-cute.gif")}
    const handle5 = () => {setImg("https://64.media.tumblr.com/f6973ed60e56546bbbe8856dcabe6b2d/c077ae297a14491a-92/s540x810/2be6944585a535ddbd4b7b2c760a37334bc534ab.gifv")}
    
    

    return(
        <Wrap>
            <h3> Grogu is Cute😍 </h3>
            <MainImg imgSelect={img}/>
            <Desc description={desc}>{setDesc}</Desc>
            <SubImgWrap>
                <SubImg onClick={handle1}><img src="https://www.icegif.com/wp-content/uploads/2022/02/icegif-911.gif" alt="Grogu eating egg"></img></SubImg>
                <SubImg onClick={handle2}><img src="https://i.pinimg.com/originals/e5/3a/3a/e53a3a286bc7b823bb9ac51bc3b716cb.gif" alt="Sleeping Grogu"></img></SubImg>
                <SubImg onClick={handle3}><img src="https://c.tenor.com/hYXKVyDSGCIAAAAC/baby-yoda-soup.gif" alt="Grogu sipping soup"></img></SubImg>
                <SubImg onClick={handle4}><img src="https://c.tenor.com/o7VKbCv_EJwAAAAC/baby-yoda-cute.gif" alt="Driving Grogu"></img></SubImg>
                <SubImg onClick={handle5}><img src="https://64.media.tumblr.com/f6973ed60e56546bbbe8856dcabe6b2d/c077ae297a14491a-92/s540x810/2be6944585a535ddbd4b7b2c760a37334bc534ab.gifv" alt="Handcuffed Grogu"></img></SubImg>
            </SubImgWrap>
        </Wrap>
    );
};
