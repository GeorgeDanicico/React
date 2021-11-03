import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SpecialInput from '../SpecialInput/SpecialInput';
import List from '../List/List';
import SpecialButton from '../SpecialButton/SpecialButton';
import SpecialSelect from '../SpecialSelect/SpecialSelect';

const Form = () => {
    return (
        <div>
            <form>
                <SpecialInput />
                <SpecialButton buttonType="default" buttonIcon={faPlus} />

                <SpecialSelect value="" onChange={() => {}} />
            </form>

            <List />
        </div>

    );
};

export default Form;