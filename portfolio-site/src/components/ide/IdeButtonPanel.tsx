import { FunctionComponent } from "react"
import tw from "tailwind-styled-components"

const ButtonPanelContainer = tw.div([
    "w-full"
])

export const IdeButtonPanel: FunctionComponent = () => {
    return (
        <ButtonPanelContainer>
            ide button panel
        </ButtonPanelContainer>
    )
}