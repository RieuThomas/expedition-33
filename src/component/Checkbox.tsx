import type { UseStateToggleType } from "../interface"

function Checkbox({isActive,setIsActive, name}: UseStateToggleType) {
    return (
        <>
            <input type="checkbox" id={`${name}-check`} name={`${name}-check`} className="inputCheck" onChange={() => setIsActive(!isActive)} />
          <label htmlFor={`${name}-check`} className="labelCheck">{name.includes('Weapon') ? 'Weapons' : 'Skills'}</label>
        </>
    )
}

export default Checkbox