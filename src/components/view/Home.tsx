import { FunctionComponent } from "react";

import tw from "tailwind-styled-components";

const Container = tw.div`
    bg-indigo-400;
`;

export const Home: FunctionComponent = () => {
    return(
    <Container>
        Home Page   
    </Container>
    );
}