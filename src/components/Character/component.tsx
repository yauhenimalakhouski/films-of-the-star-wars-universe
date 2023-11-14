import { CharacterType } from "@/types/types"

type CompProps = {
    character: CharacterType;
}


export const Character = ({character}:CompProps) => {
    return <>
       { character.name}
    </>
}