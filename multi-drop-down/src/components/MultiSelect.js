import React from 'react';
import Select from 'react-select';

function multiSelect() {
    return (
        <div>
            <span style={{ display: 'inline-block', width: "20%" }} />
            <Select
            label="React Multiple Select"
            placeholder="Pick some"
            options={[
                { value: 'Rock' },
                { value: 'Paper' },
                { value: 'Scissors' }
            ]}
            multiple
            />
        </div>
    )
}

export default multiSelect;
