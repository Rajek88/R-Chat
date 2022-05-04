import React, { useCallback, useState } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';

const EditableInputs = ({
  initialValue,
  onSave,
  label = null,
  placeholder = 'Write your Value',
  // eslint-disable-next-line no-unused-vars
  emptyMsg = 'Input is Empty',
  ...inputProps
}) => {
  const [input, setInput] = useState(initialValue);
  const [isEditable, setIsEditable] = useState(false);

  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  const onEditClick = useCallback(() => {
    setIsEditable(value => !value);
  }, []);

  return (
    <div>
      {label}
      <InputGroup>
        <Input
          {...inputProps}
          placeholder={placeholder}
          value={input}
          onChange={onInputChange}
          disabled={!isEditable}
        />
        <InputGroup.Button onClick={onEditClick}>
          <Icon icon={isEditable ? 'close' : 'edit2'} />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default EditableInputs;
