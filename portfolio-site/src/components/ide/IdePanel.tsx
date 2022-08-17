import { FunctionComponent } from "react";
import tw from "tailwind-styled-components";
import { Ide } from "./Ide";
import { IdeButtonPanel } from "./IdeButtonPanel";
import styled from "styled-components";

//const IdePanelContainer = tw.div([
//    "w-fit",
//    "h-fit",
//    "img",
//    "bg-ideImage",
//    "bg-no-repeat",
//]);

const IdePanelContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const DummyImageContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ButtonPanelContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

const ImageInterior = styled.div`
    top: 10%;
    width: 87.5%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87.5%;
    position: absolute;
`;

const DummyImage = styled.img`
    //background-image: url("/Ide.svg");
`;

export const IdePanel: FunctionComponent = () => {
    return(
        <IdePanelContainer>
            <DummyImageContainer>
                <DummyImage src="/Ide.svg"/>
                <ImageInterior>
                    <ButtonPanelContainer>
                        <IdeButtonPanel />
                    </ButtonPanelContainer>
                    <Ide />
                </ImageInterior>
            </DummyImageContainer>
        </IdePanelContainer>
    )
}