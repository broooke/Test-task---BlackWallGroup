import React, {FC, Ref, useRef} from 'react';
import Select, { SingleValue } from 'react-select';
import {DirectionCodes} from "../../../types/convertor";
import {useTypedSelector} from "../../../hooks/selector";

interface Option {
    value: string
    label: string
}

interface Props {
    options: Option[]
    onChange?: (value: DirectionCodes) => void
}

const SelectInput: FC<Props> = ({options, onChange}) => {

    const handleChange = (e: SingleValue<Option>) => {
        const code = e?.value as DirectionCodes
        onChange && onChange(code)
    }

    const handleFocus = () => {

    }

    return (
        <Select
            isClearable={true}
            isSearchable={true}
            options={options}
            onChange={handleChange}
            placeholder='Выберите валюту...'
            onFocus={handleFocus}
        />
    );
};

export default SelectInput;
