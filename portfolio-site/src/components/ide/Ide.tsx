import { FunctionComponent } from "react"
import tw from "tailwind-styled-components"

const IdeContainer = tw.div([
    "w.full"
])

export const Ide: FunctionComponent = () => {
    return (
        <IdeContainer>
            Ide
        </IdeContainer>    
    )
}