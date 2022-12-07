import * as React from "react";

type Props = {
    options: Array<string>;
    onChange: (branch: string) => void;
    value: string | undefined;
};

const BranchSelector = ({ options, onChange, value }: Props) => {
    const i = 4;

    const handleRadioChange = React.useCallback(
        (e: { target: { value: string } }) => {
            onChange(e.target.value);
        },
        [onChange]
    );

    return (
        <div>
            {options.map((option: string, index: number) => (
                <div key={`option-${index}`}>
                    <input //
                        type="radio"
                        id={`option-${option}`}
                        name="branch"
                        value={option}
                        checked={value === option}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor={`option-${option}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default BranchSelector;
